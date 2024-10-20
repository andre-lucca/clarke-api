import { Router, json } from 'express'
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier
} from './controllers/supplier'

const router = Router()

router.use(json())

router.get('/suppliers', getSuppliers)
router.post('/suppliers', createSupplier)
router.put('/suppliers/:id', updateSupplier)
router.delete('/suppliers/:id', deleteSupplier)

export default router