const express = require('express')
const Category = require('../../model/category')
const controller = require('../base/controller')(Category)
const authencticateJwt = require('../../module/auth/authenticate')
const router = express.Router()

router.post('/', authencticateJwt, (req, res, next) => {
  return controller.create(req, res, next)
})

router.get('/', (req, res, next) => {
  return controller.getAll(req, res, next)
})

router.get('/:id', (req, res, next) => {
  return controller.getOne(req, res, next)
})

router.patch('/:id', authencticateJwt, (req, res, next) => {
  return controller.update(req, res, next)
})

router.delete('/:id', authencticateJwt, (req, res, next) => {
  return controller.delete(req, res, next)
})

module.exports = router