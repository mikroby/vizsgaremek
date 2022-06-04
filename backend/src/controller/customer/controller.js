const baseService = require('../base/service')
const Customer = require('../../model/customer')

const service = baseService(Customer)

exports.findAll = (req, res, next) => {
  return service.findAll()
    .then(list => res.json(list))
}

// lehet hogy ez nem is kell!!!