const express = require('express')
const Order = require('../../model/order')
const controller = require('../base/controller')(Order, [''])

const router = express.Router()

router.post('/', (req, res, next) => {
  return controller.create(req, res, next)
})

router.get('/', (req, res, next) => {
  return controller.getAll(req, res, next)
})

// read
router.get('/:id', (req, res, next) => {
  return controller.getOne(req, res, next)
})

router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next)
})

router.delete('/:id', (req, res, next) => {
  return controller.delete(req, res, next)
})

module.exports = router