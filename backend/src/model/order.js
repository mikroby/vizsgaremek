const mongoose = require('mongoose')
const idValidator = require('mongoose-id-validator')

const OrderSchema = mongoose.Schema({
  date:{
    type: String,
    required:true
  },
  expert:{
    type: String,
    required:true
  },
  job: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },  
  accepted: {
    type: Boolean,
    required: true,
  },
});

OrderSchema.plugin(idValidator)

module.exports = mongoose.model('Order', OrderSchema)
