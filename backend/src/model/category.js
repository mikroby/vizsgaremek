const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  categoryID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Ű][a-űA-Ű \-]{2}/.test(value);
      }
    }
  },
  job: {
    type: Array,
    required: true,
  }
});

module.exports = mongoose.model('Category', CategorySchema)
