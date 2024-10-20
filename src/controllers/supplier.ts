import { Request, Response } from 'express'
import { SupplierSchema, supplierSchema } from './supplier.schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getSuppliers(req: Request, res: Response) {
  try {
    const suppliers = await prisma.supplier.findMany()
    res.json(suppliers)
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
    res.status(400).json(e)
  }
}

export async function updateSupplier(req: Request, res: Response) {
  try {
    const supplier = supplierSchema.parse(req.body) as SupplierSchema

    const updatedSupplier = await prisma.supplier.update({
      where: { id: req.params.id },
      data: {
        ...supplier,
      },
    })

    res.status(201).json(updatedSupplier)
  } catch (e) {
    res.status(400).json(e)
  }
}

export async function deleteSupplier(req: Request, res: Response) {
  try {
    await prisma.supplier.delete({
      where: { id: req.params.id },
    })

    res.status(204).json()
  } catch (e) {
    res.status(500).json({ error: 'Failed to delete supplier' })
  }
}