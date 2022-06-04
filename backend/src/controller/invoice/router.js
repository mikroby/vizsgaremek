const express = require('express')
const Invoice = require('../../model/invoice')
const controller = require('../base/controller')(Invoice)

const router = express.Router()

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next)
})

module.exports = router