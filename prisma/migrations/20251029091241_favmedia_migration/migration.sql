-- CreateEnum
CREATE TYPE "EntryType" AS ENUM ('MOVIE', 'TV_SHOW');

-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "EntryType" NOT NULL,
    "director" TEXT,
    "budget" DECIMAL(18,2),
    "location" TEXT,
    "duration" INTEGER,
    "yearTime" TEXT,
    "notes" TEXT,
    "posterUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);
