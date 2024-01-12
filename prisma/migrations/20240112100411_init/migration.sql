-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wallet" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Nft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "metaDataUrl" TEXT,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Nft_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_wallet_key" ON "User"("wallet");
