-- CreateTable
CREATE TABLE "openedGrantee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "adress" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(12) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "details" VARCHAR(1000) NOT NULL,

    CONSTRAINT "openedGrantee_pkey" PRIMARY KEY ("id")
);
