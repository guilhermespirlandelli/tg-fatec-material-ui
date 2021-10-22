-- CreateTable
CREATE TABLE "userType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "userType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(12) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "userTypeId" INTEGER NOT NULL,

    CONSTRAINT "donor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donor" ADD CONSTRAINT "donor_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "userType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
