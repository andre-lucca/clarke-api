import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const suppliers = [
  {
    name: "Eletrobras",
    logo: "https://logospng.org/download/eletrobras/logo-eletrobras-2048.png",
    originState: "RJ",
    costPerKwh: 0.30,
    minimumKwhUsage: 2000,
    totalCustomers: 9500,
    averageCustomersRating: 8.2
  },
  {
    name: "Neoenergia",
    logo: "https://logospng.org/wp-content/uploads/neoenergia.png",
    originState: "BA",
    costPerKwh: 0.28,
    minimumKwhUsage: 3500,
    totalCustomers: 8700,
    averageCustomersRating: 8.0
  },
  {
    name: "CPFL Energia",
    logo: "https://logospng.org/download/cpfl-energia/logo-cpfl-energia-2048.png",
    originState: "SP",
    costPerKwh: 0.29,
    minimumKwhUsage: 23000,
    totalCustomers: 47000,
    averageCustomersRating: 8.5
  },
  {
    name: "Light",
    logo: "https://logospng.org/download/grupo-light/light-4096.png",
    originState: "RJ",
    costPerKwh: 0.32,
    minimumKwhUsage: 45000,
    totalCustomers: 4200,
    averageCustomersRating: 7.5
  },
  {
    name: "Energisa",
    logo: "https://logospng.org/wp-content/uploads/grupo-energisa.png",
    originState: "MT",
    costPerKwh: 0.27,
    minimumKwhUsage: 10000,
    totalCustomers: 48000,
    averageCustomersRating: 8.0
  }
]

async function main() {
  const existingSuppliers = await prisma.supplier.findMany()

  if (existingSuppliers.length === 0) {
    try {
      await prisma.supplier.createMany({
        data: suppliers,
        skipDuplicates: true,
      })
      console.log('Seed data inserted successfully')
    } catch (error) {
      console.error('Error inserting seed data:', error)
    } finally {
      await prisma.$disconnect()
    }
  } else {
    console.log('Data already exists, skipping seed data insertion')
    await prisma.$disconnect()
  }
}

main()