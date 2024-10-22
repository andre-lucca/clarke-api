import { describe, it, expect, jest } from '@jest/globals'
import { Request, Response } from 'express'
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from '../src/controllers/supplier'

describe('Supplier Controller', () => {
  describe('getSuppliers', () => {
    it('Should be able to fetch suppliers', async () => {
      const req = {
        query: {
          monthlyUsage: 5000,
        }
      } as unknown as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await getSuppliers(req, res)

      expect(res.json).not.toHaveBeenCalledWith({ error: 'Invalid monthly usage' })
      expect(res.status).not.toHaveBeenCalledWith(400)
    })

    it('Should not be able to fetch suppliers with invalid query', async () => {
      const req = {
        query: {
          monthlyUsage: 0,
        },
      } as unknown as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await getSuppliers(req, res)

      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid monthly usage' })
      expect(res.status).toHaveBeenCalledWith(400)
    })
  })

  describe('createSupplier', () => {
    it('Should not be able to create a supplier without data', async () => {
      const req = {
        body: {},
      } as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await createSupplier(req, res)

      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to create supplier' })
      expect(res.status).toHaveBeenCalledWith(500)
    })
  })

  describe('updateSupplier', () => {
    it('Should not be able to update a supplier without ID', async () => {
      const req = {
        params: {},
        body: {},
      } as unknown as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await updateSupplier(req, res)

      expect(res.json).toHaveBeenCalledWith({ error: 'A supplier ID is required' })
      expect(res.status).toHaveBeenCalledWith(400)
    })

    it('Should not be able to update a supplier without data', async () => {
      const req = {
        params: {
          id: 'validId',
        },
        body: {},
      } as unknown as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await updateSupplier(req, res)

      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to update supplier' })
      expect(res.status).toHaveBeenCalledWith(500)
    })
  })

  describe('deleteSupplier', () => {
    it('Should not be able to delete a supplier without ID', async () => {
      const req = {
        params: {},
      } as unknown as Request

      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response

      await deleteSupplier(req, res)

      expect(res.json).toHaveBeenCalledWith({ error: 'A supplier ID is required' })
      expect(res.status).toHaveBeenCalledWith(400)
    })
  })
})