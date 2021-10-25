/*
  Warnings:

  - Changed the type of `peopleOnHouse` on the `grantee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "grantee" DROP COLUMN "peopleOnHouse",
ADD COLUMN     "peopleOnHouse" INTEGER NOT NULL;
