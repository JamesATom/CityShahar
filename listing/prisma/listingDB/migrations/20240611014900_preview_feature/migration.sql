/*
  Warnings:

  - You are about to drop the column `districtId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the `District` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_districtId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_regionId_fkey";

-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_regionId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "districtId",
DROP COLUMN "regionId";

-- DropTable
DROP TABLE "District";

-- DropTable
DROP TABLE "Region";
