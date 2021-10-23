-- CreateTable
CREATE TABLE "grantee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "adress" VARCHAR(100) NOT NULL,
    "adressNumber" VARCHAR(30) NOT NULL,
    "complement" VARCHAR(100),
    "district" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "state" VARCHAR(100) NOT NULL,
    "zipCode" VARCHAR(10) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "cellPhone" VARCHAR(20) NOT NULL,
    "details" VARCHAR(1000),
    "peopleOnHouse" VARCHAR(10) NOT NULL,
    "mainNeeds" VARCHAR(1000) NOT NULL,
    "userTypeId" INTEGER NOT NULL,

    CONSTRAINT "grantee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "grantee" ADD CONSTRAINT "grantee_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "userType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
