// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import GraphQLJSON from 'graphql-type-json';
import { PrismaListingModule } from './module/prisma/listingDB/prisma.module';
import { PrismaUserModule } from './module/prisma/userDB/prisma.module';
import { ListingModule } from './module/listing/listing.module';
import { MapModule } from './module/map/map.module';
import { UserModule } from './module/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: { federation: 2 },
            resolvers: { JSON: GraphQLJSON },
        }),
        ClientsModule.register([
            {
                name: 'RABBITMQ_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_URL],
                    queue: 'listings_queue',
                    queueOptions: {
                        durable: false,
                    },
                    socketOptions: {
                        heartbeatIntervalInSeconds: 30,
                        reconnectTimeInSeconds: 10,
                    },
                },
            },
        ]),
        PrismaListingModule,
        PrismaUserModule,
        ListingModule,
        MapModule,
        UserModule,
    ],
    providers: [],
    controllers: [],
})
export class AppModule {}
