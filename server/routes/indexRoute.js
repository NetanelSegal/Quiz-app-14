import express from 'express'
import categoriesRoute from './categoriesRoute.js'
import questionsRoute from './questionsRoute.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("index route is working")
})
router.use('/categories', categoriesRoute)
router.use('/questions', questionsRoute)

export default router