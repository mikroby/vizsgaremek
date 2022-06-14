const express = require('express')
const Expert = require('../../model/expert')
const controller = require('../base/controller')(Expert)

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