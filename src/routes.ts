import { Router, json } from 'express'
import {
  createSupplier,
  getSuppliers
} from './controllers/supplier'

const router = Router()

router.use(json())

router.get('/suppliers', getSuppliers)
router.post('/suppliers', createSupplier)
router.put('/suppliers/:id', createSupplier)
router.delete('/suppliers/:id', createSupplier)

export default router