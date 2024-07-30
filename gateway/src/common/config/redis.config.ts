// redis.config.ts
import { URL } from 'url';
import * as dotenv from 'dotenv';

dotenv.config();

const redisUrl = new URL(process.env.REDIS_URL);

export const redisOptions = {
    host: redisUrl.hostname,
    port: Number(redisUrl.port),
    password: redisUrl.password,
    maxRetriesPerRequest: 100,
    tls: {
        rejectUnauthorized: false,
    }
};
