const express = require('express')
const Category = require('../../model/category')
const controller = require('../base/controller')(Category)

const router = express.Router()

// get all
router.get('/', (req, res, next) => {
  return controller.getAll(req, res, next)
})

// get one
router.get('/:id', (req, res, next) => {
  return controller.getOne(req, res, next)
})



module.exports = router