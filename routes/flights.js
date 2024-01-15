import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// GET localhost:3000/flights/:flightId
router.get('/:flightId', flightsCtrl.show)
// GET localhost:3000/flights/:flightId/edit
// POST localhost:3000/flights
router.post('/', flightsCtrl.create)
// DELETE localhost:3000/flights/:flightId
// PUT localhost:3000/flights/:flightId (update)

export { router }
