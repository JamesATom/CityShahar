import { PrismaClient, Prisma } from '../prisma/listingDB-client';
import * as fs from 'node:fs';
import { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { Writable } from 'stream';

const prisma = new PrismaClient();

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const pipeline = chain([
        fs.createReadStream(`${__dirname}/oneExample.txt`),
        parser(),
        streamArray()
    ]);

    const processingStream = new Writable({
        objectMode: true,
        async write({ value }, encoding, callback) {
            const property = value;
            if (!property) {
                callback();
                return;
            }

            try {
                await prisma.$transaction(async () => {
                    const role = await prisma.role.upsert({
                        where: { id: property.user?.role?.id || 0 },
                        update: {
                            key: property.user?.role?.key || "DefaultKey",
                            name: property.user?.role?.name || "DefaultName",
                        },
                        create: {
                            key: property.user?.role?.key || "DefaultKey",
                            name: property.user?.role?.name || "DefaultName",
                        },
                    });

                    const propertyOwner = await prisma.propertyOwner.upsert({
                        where: { id: property.user?.id || 0 },
                        update: {
                            firstName: property.user?.firstName || "DefaultFirstName",
                            lastName: property.user?.lastName || "DefaultLastName",
                            role: { connect: { id: role.id } },
                            avatarUrl: property.user?.avatarUrl || "",
                            avatarSet: property.user?.avatarSet ? JSON.stringify(property.user.avatarSet) : null,
                        },
                        create: {
                            firstName: property.user?.firstName || "DefaultFirstName",
                            lastName: property.user?.lastName || "DefaultLastName",
                            role: { connect: { id: role.id } },
                            avatarUrl: property.user?.avatarUrl || "",
                            avatarSet: property.user?.avatarSet ? JSON.stringify(property.user.avatarSet) : null,
                        },
                    });

                    const type = await prisma.type.upsert({
                        where: { id: property.category?.type?.id || 0 },
                        update: {
                            key: property.category?.type?.key || "DefaultKey",
                            name: property.category?.type?.name || { "en": "DefaultName" },
                            secondaryName: property.category?.type?.secondaryName || { "en": "DefaultSecondaryName" },
                            totalCount: property.category?.type?.totalCount || 0,
                            children: property.category?.type?.children || {},
                        },
                        create: {
                            key: property.category?.type?.key || "DefaultKey",
                            name: property.category?.type?.name || { "en": "DefaultName" },
                            secondaryName: property.category?.type?.secondaryName || { "en": "DefaultSecondaryName" },
                            totalCount: property.category?.type?.totalCount || 0,
                            children: property.category?.type?.children || {},
                        },
                    });

                    const category = await prisma.category.upsert({
                        where: { id: property.category?.id || 0 },
                        update: {
                            name: property.category?.name || { "en": "DefaultCategoryName" },
                            type: { connect: { id: type.id } }
                        },
                        create: {
                            name: property.category?.name || { "en": "DefaultCategoryName" },
                            type: { connect: { id: type.id } }
                        },
                    });

                    const address = await prisma.address.create({
                        data: {
                            area: property.address?.area || { "en": "DefaultArea" },
                            house: property.address?.house || { "en": "DefaultHouse" },
                            geoLocation: property.address?.geoLocation || { "latitude": 0, "longitude": 0 },
                            fullAddress: property.address?.fullAddress || { "en": "DefaultFullAddress" },
                            metros: property.address?.metros || [],
                            addressRouteKey: property.address?.addressRouteKey || "DefaultRouteKey",
                            addressTypeKey: property.address?.addressTypeKey || "DefaultTypeKey",
                        },
                    });

                    const imageSet = await prisma.imageSet.create({
                        data: { images: property.imageSets || [] },
                    });
            
                    const generalAttributes = await prisma.generalAttributes.create({
                        data: { attributes: property.generalAttributes },
                    });

                    await prisma.property.upsert({
                        where: { id: property.id },
                        update: {
                            viewName: property.viewName || { "en": "DefaultViewName" },
                            boardName: property.boardName || { "en": "DefaultBoardName" },
                            categoryId: category.id,
                            statusKey: property.statusKey || "DefaultStatusKey",
                            routeKey: property.routeKey || "DefaultRouteKey",
                            price: property.price || { "usd": 0 },
                            priceByUnit: property.priceByUnit || { "usd": 0 },
                            unit: property.unit || "squaremeter",
                            currency: property.currency || "USD",
                            description: property.description || { "en": "DefaultDescription" },
                            addressId: address.id,
                            phone: property.phone || "DefaultPhone",
                            videoLink: property.videoLink || undefined,
                            viewCount: property.viewCount || 0,
                            isCommissioned: property.isCommissioned || false,
                            imageSetsId: imageSet.id,
                            generalAttributesId: generalAttributes.id,
                            propertyOwnerId: propertyOwner.id,
                            isFavorite: property.isFavorite || false,
                            isHidden: property.isHidden || false,
                            createdAt: property.createdAt ? new Date(property.createdAt) : new Date(),
                            updatedAt: property.updatedAt ? new Date(property.updatedAt) : new Date(),
                            publishedAt: property.publishedAt ? new Date(property.publishedAt) : null,
                        },
                        create: {
                            viewName: property.viewName || { "en": "DefaultViewName" },
                            boardName: property.boardName || { "en": "DefaultBoardName" },
                            categoryId: category.id,
                            statusKey: property.statusKey || "DefaultStatusKey",
                            routeKey: property.routeKey || "DefaultRouteKey",
                            price: property.price || { "usd": 0 },
                            priceByUnit: property.priceByUnit || { "usd": 0 },
                            unit: property.unit || "squaremeter",
                            currency: property.currency || "USD",
                            description: property.description || { "en": "DefaultDescription" },
                            addressId: address.id,
                            phone: property.phone || "DefaultPhone",
                            videoLink: property.videoLink || undefined,
                            viewCount: property.viewCount || 0,
                            isCommissioned: property.isCommissioned || false,
                            imageSetsId: imageSet.id,
                            generalAttributesId: generalAttributes.id,
                            propertyOwnerId: propertyOwner.id,
                            isFavorite: property.isFavorite || false,
                            isHidden: property.isHidden || false,
                            createdAt: property.createdAt ? new Date(property.createdAt) : new Date(),
                            updatedAt: property.updatedAt ? new Date(property.updatedAt) : new Date(),
                            publishedAt: property.publishedAt ? new Date(property.publishedAt) : null,
                        },
                    });
                },
                {
                    maxWait: 5000,
                    timeout: 20000,
                    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
                });

                console.log('Successfully uploaded property with id: ' + property.id);
                await delay(1000);
                
                callback();
            } catch (error) {
                console.error(error);
                callback();
            }
        }
    });

    pipeline.pipe(processingStream);

    processingStream.on('finish', async () => {
        await prisma.$disconnect();
        console.log('All done');
    });

    processingStream.on('error', async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    });
}

main().catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});