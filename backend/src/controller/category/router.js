const express = require('express')
const Category = require('../../model/category')
const controller = require('../base/controller')(Category)

const router = express.Router()

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next)
})

module.exports = router