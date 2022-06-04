const baseService = require('../base/service')
const Category = require('../../model/category')

const service = baseService(Category)

exports.findAll = (req, res, next) => {
  return service.findAll()
    .then(list => res.json(list))
}

// lehet hogy ez nem is kell!!!