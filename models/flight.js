import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/
  }, 
  price: {
    type: Number,
    min: 0,
    required: true
  },
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American Airlines', 'Southwest Airlines', 'United Airlines'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: Date.now() + 365*24*60*60000
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}