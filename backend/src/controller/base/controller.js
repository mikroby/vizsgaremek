const express = require('express')
const baseService = require('./service')

module.exports = (model) => {
  const service = baseService(model)
  return {
    getAll(req, res, next) {
      return service.findAll()
        .then(list => res.json(list))
    },
    getOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity));
    },
    update(req, res, next) {
      return service.update(req.params.id, req.body)
        .then(entity => res.json(entity))
        .catch(error => {
          res.statusCode = 501
          res.json({
            hasError: true,
            message: error.message,
          })
        });
    }
    // create
    
    // delete

  }
}
