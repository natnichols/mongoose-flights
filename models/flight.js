import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = mongoose.Schema({
  airline: {
    type: String,
    enum: ['American Airlines', 'Southwest Airlines', 'United Airlines'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    /* insert functionality to make default DEN - need mongoose middleware */
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
    default: function() {
      /*return date 1 year from date created */
      return new Date().getDate()
    },
    required: true
  },
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}