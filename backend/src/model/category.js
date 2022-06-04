const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  categoryID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  job: {
    type: Array,
    required: true,
  }
});

module.exports = mongoose.model('Category', CategorySchema)
