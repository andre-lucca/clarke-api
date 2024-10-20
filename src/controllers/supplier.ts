import { Request, Response } from 'express'

export function getSuppliers(req: Request, res: Response) {
  res.json('Supplier list')
}

export function createSupplier(req: Request, res: Response) {
  res.status(201).json('Supplier created')
}

export function updateSupplier(req: Request, res: Response) {
  res.status(201).json('Supplier updated')
}

export function deleteSupplier(req: Request, res: Response) {
  res.status(204).json('Supplier deleted')
}