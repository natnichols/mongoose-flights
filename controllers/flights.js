import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}).sort({departs: 'asc'}).then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights',
    })
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/')
  })
}

function newFlight(req, res) {
  const newFlight = new Flight()
  // Obtain the default date
  const dt = newFlight.departs
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('flights/new', {
    title: 'Add Flight',
    departsDate
  })
}

function show(req, res) {
  Flight.findById(req.params.flightId).then(flight => {
    res.render('flights/show', {
      title: `Flight Details`,
      flight: flight
    })
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/')
  })
}

function edit(req, res) {
  Flight.findById(req.params.flightId).then(flight => {
    const departDefaultDate = flight.departs.toISOString().slice(0, 16)
    res.render('flights/edit', {
      title: `Edit Flight ${req.params.flightId}:`,
      flight: flight,
      departDefaultDate: departDefaultDate
    })
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/')
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body).then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId).then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/flights')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new:true}).then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(`🚨💥🖍️`, error)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  show,
  edit,
  create,
  deleteFlight as delete,
  update,
}