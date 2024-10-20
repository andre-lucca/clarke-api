import { z } from 'zod'

export const supplierSchema = z.object({
  name: z.string().min(3).max(255),
  logo: z.string().url(),
  originState: z.string().length(2),
  costPerKwh: z.number().positive(),
  minimumKwhUsage: z.number().int().positive(),
  totalCustomers: z.number().int().positive(),
  averageCustomersRating: z.number().min(1).max(10),
})

export type SupplierSchema = z.infer<typeof supplierSchema>