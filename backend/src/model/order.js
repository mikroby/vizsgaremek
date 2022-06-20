const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  expert: {
    type: String,
    required: true,
  },
  job: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },  
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema)
