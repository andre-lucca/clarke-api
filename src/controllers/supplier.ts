import { Request, Response } from 'express'
import { supplierSchema } from './supplier.schema'

export function getSuppliers(req: Request, res: Response) {
  res.json('Supplier list')
}

export function createSupplier(req: Request, res: Response) {
  try {
    const supplier = supplierSchema.parse(req.body)

    console.log(supplier)

    res.status(201).json(supplier)
  } catch (e) {
    res.status(400).json(e)
  }
}

export function updateSupplier(req: Request, res: Response) {
  res.status(201).json('Supplier updated')
}

export function deleteSupplier(req: Request, res: Response) {
  res.status(204).json('Supplier deleted')
}