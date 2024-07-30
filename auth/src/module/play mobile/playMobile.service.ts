// auth.service.ts
import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '../redis/redis.service';
import { SendVerificationCode } from '../../common/dto/sendVerificationCode-auth.input';
import { VerifyCodeInput } from '../../common/dto/verifyCode-auth.input';

@Injectable()
export class PlayMobileService {
    private smsApiUrl: string;
    private smsUsername: string;
    private smsPassword: string;
    private readonly logger = new Logger(PlayMobileService.name);
    private readonly numOfMessagesKey = 'numOfMessages';

    constructor(
        private readonly redisService: RedisService,
        private readonly configService: ConfigService,
    ) {
        this.smsApiUrl = this.configService.get<string>('SMS_API_ENDPOINT');
        this.smsUsername = this.configService.get<string>('SMS_API_USERNAME');
        this.smsPassword = this.configService.get<string>('SMS_API_PASSWORD');
    }

    private async getNumOfMessages(): Promise<number> {
        const numOfMessages = await this.redisService.getNumOfMessages(this.numOfMessagesKey);
        return numOfMessages ? parseInt(numOfMessages, 10) : 4750;
    }

    private async setNumOfMessages(num: number): Promise<void> {
        await this.redisService.setNumOfMessages(this.numOfMessagesKey, num.toString());
    }

    async sendVerificationCode(data: SendVerificationCode): Promise<boolean> {
        let numOfMessages = await this.getNumOfMessages();

        if (numOfMessages <= 0) {
            this.logger.error('No SMS messages left. Unable to send verification code.');
            throw new HttpException('Unable to send SMS at this time', HttpStatus.SERVICE_UNAVAILABLE);
        }

        try {
            const verificationCode = this.generateVerificationCode();
            const messageId = this.generateMessageId(numOfMessages);

            // Store the verification code in Redis with expiration
            await this.storeVerificationCode(data.phoneNumber, verificationCode);

            const boldCityShahar = '𝗖𝗶𝘁𝘆𝗦𝗵𝗮𝗵𝗮𝗿'; 
            const boldVerificationCode = `${verificationCode}`.split('').map(char => {
                return ['𝟬', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵'][parseInt(char)];
            }).join('');

            const smsPayload = {
                messages: [
                    {
                        recipient: data.phoneNumber,
                        'message-id': messageId,
                        sms: {
                            originator: '3700',
                            content: {
                                text: `Sizning ${boldCityShahar} tasdiqlash kodingiz: ${boldVerificationCode}. Bu kodni hech kimga bermang; Bizning xodimlarimiz hech qachon kod so'ramaydi.`
                            }
                        }
                    }
                ]
            };
            
            const response = await axios.post(this.smsApiUrl, smsPayload, {
                auth: {
                    username: this.smsUsername,
                    password: this.smsPassword
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                numOfMessages--;
                await this.setNumOfMessages(numOfMessages);
                this.checkRemainingMessages(numOfMessages);
                return true;
            } else {
                throw new HttpException('Failed to send SMS', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (error) {
            this.logger.error(`Error sending SMS: ${error.message}`);
            throw new HttpException('Failed to send SMS', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private generateVerificationCode(): string {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    private generateMessageId(numOfMessages: number): string {
        return `abc${(5000 - numOfMessages).toString().padStart(9, '0')}`;
    }

    private checkRemainingMessages(numOfMessages: number): void {
        if (numOfMessages < 1000) {
            this.logger.warn(`Low SMS balance: Only ${numOfMessages} messages left.`);
        }
        if (numOfMessages < 100) {
            this.logger.error(`Critical SMS balance: Only ${numOfMessages} messages left. Replenish immediately!`);
        }
    }

    private async storeVerificationCode(phoneNumber: string, code: string): Promise<void> {
        await this.redisService.storeVerificationCode(`verification:${phoneNumber}`, code);
    }

    async verifyCode({phoneNumber, code}: VerifyCodeInput): Promise<boolean> {
        const storedCode = await this.redisService.getVerificationCode(`verification:${phoneNumber}`);
        if (storedCode == code) {
            await this.redisService.deleteVerificationCode(`verification:${phoneNumber}`);
            return true;
        }
        return false;
    }
}
