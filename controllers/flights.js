import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req, res) {
  Flight.create(req.body).then(flight => {
    res.redirect('/flights/new')
  })
  .catch(error => {
    console.log(`💥`, error)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
}