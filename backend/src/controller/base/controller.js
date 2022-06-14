const express = require('express')
const baseService = require('./service')
const createError = require('http-errors')

module.exports = (model) => {
  const service = baseService(model)
  return {
    
    // create
    create(req, res, next) {
      return service.createOne(req.body)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.InternalServerError(error.message)))
    },    
    // read
    getAll(req, res, next) {
      return service.findAll()
      .then(list => res.json(list))
      .catch(error => next(new createError.NotFound('Items are not found!')))
    },
    // read
    getOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.NotFound('Item is not found!')))
    },
    // update
    update(req, res, next) {
      return service.updateOne(req.params.id, req.body)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.InternalServerError(error.message)))
    },
    // delete
    delete(req, res, next) {
      return service.deleteOne(req.params.id)
      .then(entity => res.json(entity))
      .catch(error => next(new createError.InternalServerError(error.message)))
    }
    
  }
}

// státusz- és hibkódok jók így?
// delete-nél üres {}-ot vagy magát az entity-t kell visszaadni?