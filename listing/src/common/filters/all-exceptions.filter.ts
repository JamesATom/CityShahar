// all-exceptions.filter.ts
import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';

const prismaErrorMap = {
    'P2002': 'Unique constraint violation',
};

@Catch()
export class AllExceptionsFilter implements GqlExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const gqlHost = GqlArgumentsHost.create(host);
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        
        if (exception instanceof Error) {
            if (exception instanceof HttpException) {
                statusCode = exception.getStatus();
                message = exception.getResponse()['message'] || exception.message;
            } else if (exception instanceof PrismaClientKnownRequestError) {
                statusCode = HttpStatus.BAD_REQUEST;
                message = prismaErrorMap[exception.code] || 'Unknown Prisma error';
            } else if (exception instanceof PrismaClientUnknownRequestError) {
                statusCode = HttpStatus.BAD_REQUEST;
                message = `Unknown database error: ${exception.message}`;
            }
        } else {
            throw new Error('Exception is not an instance of Error');
        }

        const gqlError = new GraphQLError(message, {
            extensions: {
                code: statusCode,
                path: gqlHost.getInfo() ? gqlHost.getInfo().path : undefined,
                ...(exception instanceof HttpException && { response: exception.getResponse() })
            },
        });

        return gqlError;
    }
}