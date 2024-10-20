-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "originState" TEXT NOT NULL,
    "costPerKwh" INTEGER NOT NULL,
    "minimumKwhUsage" INTEGER NOT NULL,
    "totalCustomers" INTEGER NOT NULL,
    "averageCustomersRating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);
