const express = require('express')
const Customer = require('../../model/cutomer')
const controller = require('../base/controller')(Customer)

const router = express.Router()

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next)
})

module.exports = router