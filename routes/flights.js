import { Router } from 'express'

const router = Router()

// GET localhost:3000/flights
router.get('/', function(req, res) {
  res.send('respond with a resource')
})
// GET localhost:3000/flights/new

// GET localhost:3000/flights/:flightId

// GET localhost:3000/flights/:flightId/edit

// POST localhost:3000/flights

// DELETE localhost:3000/flights/:flightId

// PUT localhost:3000/flights/:flightId (update)


export { router }
