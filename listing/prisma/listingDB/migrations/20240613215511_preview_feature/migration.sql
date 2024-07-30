/*
  Warnings:

  - You are about to drop the `GeneralAttribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GeneralAttributeGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GeneralAttribute" DROP CONSTRAINT "GeneralAttribute_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_generalAttributesId_fkey";

-- DropTable
DROP TABLE "GeneralAttribute";

-- DropTable
DROP TABLE "GeneralAttributeGroup";

-- CreateTable
CREATE TABLE "GeneralAttributes" (
    "id" SERIAL NOT NULL,
    "attributes" JSONB NOT NULL,

    CONSTRAINT "GeneralAttributes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_generalAttributesId_fkey" FOREIGN KEY ("generalAttributesId") REFERENCES "GeneralAttributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
