// emitController.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaListingDBService } from '../../prisma/listingDB/prisma.service';
import { CreateListingInput } from '../dto/create-listing.input';

@Injectable()
export class EmitControllerService {
    constructor(
        private readonly prismaListingDBService: PrismaListingDBService,
    ) {}

    async handleListingCreatedEvent(data: CreateListingInput) {
        // await this.prisma.$transaction(async () => {
        //     const role = await this.prisma.role.upsert({
        //         where: { id: data.user?.role?.id || 0 },
        //         update: {
        //             key: data.user?.role?.key || "DefaultKey",
        //             name: data.user?.role?.name || "DefaultName",
        //         },
        //         create: {
        //             key: data.user?.role?.key || "DefaultKey",
        //             name: data.user?.role?.name || "DefaultName",
        //         },
        //     });
    
        //     const propertyOwner = await this.prisma.propertyOwner.upsert({
        //         where: { id: data.user?.id || 0 },
        //         update: {
        //             firstName: data.user?.firstName || "DefaultFirstName",
        //             lastName: data.user?.lastName || "DefaultLastName",
        //             role: { connect: { id: role.id } },
        //             avatarUrl: data.user?.avatarUrl || "",
        //             avatarSet: data.user?.avatarSet ? JSON.stringify(data.user.avatarSet) : null,
        //         },
        //         create: {
        //             firstName: data.user?.firstName || "DefaultFirstName",
        //             lastName: data.user?.lastName || "DefaultLastName",
        //             role: { connect: { id: role.id } },
        //             avatarUrl: data.user?.avatarUrl || "",
        //             avatarSet: data.user?.avatarSet ? JSON.stringify(data.user.avatarSet) : null,
        //         },
        //     });
    
        //     const type = await this.prisma.type.upsert({
        //         where: { id: data.category?.type?.id || 0 },
        //         update: {
        //             key: data.category?.type?.key || "DefaultKey",
        //             name: data.category?.type?.name || { "en": "DefaultName" },
        //             secondaryName: data.category?.type?.secondaryName || { "en": "DefaultSecondaryName" },
        //             totalCount: data.category?.type?.totalCount || 0,
        //             children: data.category?.type?.children || {},
        //         },
        //         create: {
        //             key: data.category?.type?.key || "DefaultKey",
        //             name: data.category?.type?.name || { "en": "DefaultName" },
        //             secondaryName: data.category?.type?.secondaryName || { "en": "DefaultSecondaryName" },
        //             totalCount: data.category?.type?.totalCount || 0,
        //             children: data.category?.type?.children || {},
        //         },
        //     });
    
        //     const category = await this.prisma.category.upsert({
        //         where: { id: data.category?.id || 0 },
        //         update: {
        //             name: data.category?.name || { "en": "DefaultCategoryName" },
        //             type: { connect: { id: type.id } }
        //         },
        //         create: {
        //             name: data.category?.name || { "en": "DefaultCategoryName" },
        //             type: { connect: { id: type.id } }
        //         },
        //     });
    
        //     const address = await this.prisma.address.create({
        //         data: {
        //             area: data.address?.area || { "en": "DefaultArea" },
        //             house: data.address?.house || { "en": "DefaultHouse" },
        //             geoLocation: data.address?.geoLocation || { "latitude": 0, "longitude": 0 },
        //             fullAddress: data.address?.fullAddress || { "en": "DefaultFullAddress" },
        //             metros: data.address?.metros || [],
        //             addressRouteKey: data.address?.addressRouteKey || "DefaultRouteKey",
        //             addressTypeKey: data.address?.addressTypeKey || "DefaultTypeKey",
        //         },
        //     });
    
        //     const imageSet = await this.prisma.imageSet.create({
        //         data: { images: data.imageSets || [] },
        //     });
    
        //     const generalAttributes = await this.prisma.generalAttributes.create({
        //         data: { attributes: data.generalAttributes || [] },
        //     });
    
        //     const listing = await this.prisma.property.create({
        //         data: {
        //             viewName: data.viewName || { "en": "DefaultViewName" },
        //             boardName: data.boardName || { "en": "DefaultBoardName" },
        //             categoryId: category.id,
        //             statusKey: data.statusKey || "DefaultStatusKey",
        //             routeKey: data.routeKey || "DefaultRouteKey",
        //             price: data.price || { "usd": 0 },
        //             priceByUnit: data.priceByUnit || { "usd": 0 },
        //             unit: data.unit || "squaremeter",
        //             currency: data.currency || "USD",
        //             description: data.description || { "en": "DefaultDescription" },
        //             addressId: address.id,
        //             phone: data.phone || "DefaultPhone",
        //             videoLink: data.videoLink || undefined,
        //             viewCount: data.viewCount || 0,
        //             isCommissioned: data.isCommissioned || false,
        //             imageSetsId: imageSet.id,
        //             generalAttributesId: generalAttributes.id,
        //             propertyOwnerId: propertyOwner.id,
        //             isFavorite: data.isFavorite || false,
        //             isHidden: data.isHidden || false,
        //             createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        //             updatedAt: data.updatedAt ? new Date(data.updatedAt) : new Date(),
        //             publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
        //         }
        //     });
    
        // }, {
        //     maxWait: 5000,
        //     timeout: 10000,
        //     isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        // });
        console.log('Came here! ', data);
    }
}
