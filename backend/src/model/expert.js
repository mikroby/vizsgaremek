const mongoose = require('mongoose')

const ExpertSchema = mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
  age: Number,
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
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
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Expert', ExpertSchema)
