const mongoose = require('mongoose')
const idValidator = require('mongoose-id-validator')

const CategorySchema = mongoose.Schema({
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
  },
  logo: {
    type: String,
    required: true,
  }
});

CategorySchema.plugin(idValidator)

module.exports = mongoose.model('Category', CategorySchema)
