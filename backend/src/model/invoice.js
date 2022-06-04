const mongoose = require('mongoose')

const InvoiceSchema = mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  expertID: {
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

module.exports = mongoose.model('Invoice', InvoiceSchema)
