const express = require('express')
const Expert = require('../../model/expert')
const controller = require('../base/controller')(Expert)

const router = express.Router()

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next)
})

module.exports = router