import express from 'express'
import { getCaregories } from '../controllers/categoriesController.js'
const router = express.Router()

router.get('/', getCaregories)

export default router