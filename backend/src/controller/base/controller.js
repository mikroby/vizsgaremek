const baseService = require('./service')
const createError = require('http-errors')

module.exports = (model, populateList = []) => {
  const service = baseService(model, populateList)
  return {
    
    create(req, res, next) {
      return service.createOne(req.body)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.InternalServerError(error.message)))
    },    
    getAll(req, res, next) {
      return service.findAll()
      .then(list => res.json(list))
      .catch(error => next(new createError.NotFound('Items are not found!')))
    },
    getOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.NotFound('Item is not found!')))
    },
    update(req, res, next) {
      return service.updateOne(req.params.id, req.body)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.InternalServerError(error.message)))
    },
    delete(req, res, next) {
      return service.deleteOne(req.params.id)
      .then(entity => res.json(entity))
      .catch(error => next(new createError.InternalServerError(error.message)))
    }
    
  }
}
