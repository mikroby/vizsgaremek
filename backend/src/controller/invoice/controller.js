const baseService = require('../base/service')
const Invoice = require('../../model/invoice')

const service = baseService(Invoice)

exports.findAll = (req, res, next) => {
  return service.findAll()
    .then(list => res.json(list))
}

// lehet hogy ez nem is kell!!!