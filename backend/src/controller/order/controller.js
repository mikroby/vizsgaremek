const baseService = require('../base/service')
const Order = require('../../model/order')

const service = baseService(Order)

exports.findAll = (req, res, next) => {
  return service.findAll()
    .then(list => res.json(list))
}

// lehet hogy ez nem is kell!!!