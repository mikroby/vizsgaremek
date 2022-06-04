const mongoose = require('mongoose')

const ExpertSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  job: {
    type: Array,
    required: true,
  },
  categoryID: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  workDays: {
    type: Array,
    required: true,
  },
  availableFrom: {
    type: String,
    required: true,
  },
  availableTill: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true
  }  
});

module.exports = mongoose.model('Expert', ExpertSchema)
