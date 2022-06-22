const mongoose = require('mongoose')

const ExpertSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  job: {
    type: Array,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  age: Number,
  phone: {
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
    min: 0,
    max: 10,
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Expert', ExpertSchema)
