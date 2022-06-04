const baseService = require('../base/service')
const Expert = require('../../model/expert')

const service = baseService(Expert)

exports.findAll = (req, res, next) => {
  return service.findAll()
    .then(list => res.json(list))
}

// lehet hogy ez nem is kell!!!