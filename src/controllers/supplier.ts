import { Request, Response } from 'express'
import { SupplierSchema, supplierSchema } from './supplier.schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getSuppliers(req: Request, res: Response) {
  try {
    const monthlyUsage = Number(req.query?.monthlyUsage ?? 0)

    if (isNaN(monthlyUsage) || monthlyUsage <= 0) {
      res.status(400).json({ error: 'Invalid monthly usage' })
      return
    }

    const suppliers = await prisma.supplier.findMany()
    const mappedSuppliers = suppliers.map(supplier => (
      {
        ...supplier,
        couldServe: supplier.minimumKwhUsage <= monthlyUsage,
      }
    ))

    res.json(mappedSuppliers)
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch suppliers' })
  }
}

export async function createSupplier(req: Request, res: Response) {
  try {
    const supplier = supplierSchema.parse(req.body) as SupplierSchema

    const newSupplier = await prisma.supplier.create({
      data: {
        ...supplier
      }
    })

    res.status(201).json(newSupplier)
  } catch (e) {
    res.status(500).json({ error: 'Failed to create supplier' })
  }
}

export async function updateSupplier(req: Request, res: Response) {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: 'A supplier ID is required' })
    }

    const supplier = supplierSchema.parse(req.body) as SupplierSchema

    const updatedSupplier = await prisma.supplier.update({
      where: { id: req.params.id },
      data: {
        ...supplier,
      },
    })

    res.status(201).json(updatedSupplier)
  } catch (e) {
    res.status(500).json({ error: 'Failed to update supplier' })
  }
}

export async function deleteSupplier(req: Request, res: Response) {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: 'A supplier ID is required' })
    }

    await prisma.supplier.delete({
      where: { id: req.params.id },
    })

    res.status(204).json()
  } catch (e) {
    res.status(500).json({ error: 'Failed to delete supplier' })
  }
}