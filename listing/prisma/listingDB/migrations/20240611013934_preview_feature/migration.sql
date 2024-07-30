-- CreateTable
CREATE TABLE "PropertyOwner" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "avatarUrl" TEXT,
    "avatarSet" JSONB,

    CONSTRAINT "PropertyOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" JSONB NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "viewName" JSONB NOT NULL,
    "boardName" JSONB NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "statusKey" TEXT NOT NULL,
    "routeKey" TEXT NOT NULL,
    "price" JSONB NOT NULL,
    "priceByUnit" JSONB,
    "unit" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "addressId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "videoLink" TEXT,
    "viewCount" INTEGER NOT NULL,
    "isCommissioned" BOOLEAN NOT NULL,
    "imageSetsId" INTEGER NOT NULL,
    "generalAttributesId" INTEGER NOT NULL,
    "propertyOwnerId" INTEGER NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "isHidden" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "name" JSONB NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "secondaryName" JSONB NOT NULL,
    "totalCount" INTEGER NOT NULL,
    "children" JSONB NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "area" JSONB NOT NULL,
    "house" JSONB NOT NULL,
    "geoLocation" JSONB NOT NULL,
    "fullAddress" JSONB NOT NULL,
    "metros" JSONB NOT NULL,
    "addressRouteKey" TEXT NOT NULL,
    "addressTypeKey" TEXT NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageSet" (
    "id" SERIAL NOT NULL,
    "images" JSONB NOT NULL,

    CONSTRAINT "ImageSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralAttributes" (
    "id" SERIAL NOT NULL,
    "attributes" JSONB NOT NULL,

    CONSTRAINT "GeneralAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- AddForeignKey
ALTER TABLE "PropertyOwner" ADD CONSTRAINT "PropertyOwner_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_imageSetsId_fkey" FOREIGN KEY ("imageSetsId") REFERENCES "ImageSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_generalAttributesId_fkey" FOREIGN KEY ("generalAttributesId") REFERENCES "GeneralAttributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_propertyOwnerId_fkey" FOREIGN KEY ("propertyOwnerId") REFERENCES "PropertyOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
