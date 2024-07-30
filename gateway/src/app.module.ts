// app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ConfigModule } from '@nestjs/config';
import { RedisCache } from 'apollo-server-cache-redis';
import { redisOptions } from './common/config/redis.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            useFactory: async () => ({
                gateway: {
                    supergraphSdl: new IntrospectAndCompose({
                        subgraphs: [
                            {
                                name: 'auth',
                                url: process.env.AUTH_SERVICE_URL,
                            },
                            {
                                name: 'listing', 
                                url: process.env.LISTING_SERVICE_URL,
                            },
                            {
                                name: 'user',
                                url: process.env.USER_SERVICE_URL,
                            }
                        ]
                    }),
                    buildService({ url }) {
                        return new RemoteGraphQLDataSource({ 
                            url,
                            willSendRequest({ request, context }) {
                                const authorization = context?.req?.headers?.authorization ? context.req.headers.authorization : null;
                
                                if (authorization != null) {
                                    request.http.headers.set('Authorization', authorization);
                                }
                            }
                        });
                    },
                },
                server: {
                    context: ({ req }) => ({ req }),
                    persistedQueries: {
                        cache: new RedisCache(redisOptions),
                        ttl: 60 * 60 * 24 * 7, 
                    },
                    cache: 'bounded'
                },
            }),
        }),
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
