const express = require('express')
const Order = require('../../model/order')
const controller = require('../base/controller')(Order)

const router = express.Router()

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next)
})

module.exports = router