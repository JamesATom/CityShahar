// all-exceptions.filter.ts
import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

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