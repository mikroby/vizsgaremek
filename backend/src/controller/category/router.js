const express = require('express')
const Category = require('../../model/category')
const controller = require('../base/controller')(Category)

const router = express.Router()

// create
router.post('/', (req, res, next) => {
  return controller.create(req, res, next)
})

// read
router.get('/', (req, res, next) => {
  return controller.getAll(req, res, next)
})

// read
router.get('/:id', (req, res, next) => {
  return controller.getOne(req, res, next)
})

// update
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next)
})

// delete
router.delete('/:id', (req, res, next) => {
  return controller.delete(req, res, next)
})

module.exports = router