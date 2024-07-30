/*
  Warnings:

  - You are about to drop the `GeneralAttributes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_generalAttributesId_fkey";

-- DropTable
DROP TABLE "GeneralAttributes";

-- CreateTable
CREATE TABLE "GeneralAttributeGroup" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "groupName" JSONB NOT NULL,

    CONSTRAINT "GeneralAttributeGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralAttribute" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "name" JSONB NOT NULL,
    "unitMeasurement" TEXT NOT NULL,
    "value" JSONB NOT NULL,

    CONSTRAINT "GeneralAttribute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_generalAttributesId_fkey" FOREIGN KEY ("generalAttributesId") REFERENCES "GeneralAttributeGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralAttribute" ADD CONSTRAINT "GeneralAttribute_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "GeneralAttributeGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
