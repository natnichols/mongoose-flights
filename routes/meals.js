import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals

// GET localhost:3000/meals/new
router.get('/new', mealsCtrl.new)
// GET localhost:3000/meals/:mealId

// GET localhost:3000/meals/:mealId/edit

// POST localhost:3000/meals
router.post('/', mealsCtrl.create)
// POST localhost:3000/meals

// DELETE localhost:3000/meals/:mealId

// PUT localhost:3000/meals/:mealId (update)


export {
  router
}