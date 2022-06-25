const mongoose = require('mongoose')

const InvoiceSchema = mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  }, 
  charge: {
    type: Number,
    required: true,
  },
  date:{
    type: String,
    required:true
  },
  paid: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Invoice', InvoiceSchema)
