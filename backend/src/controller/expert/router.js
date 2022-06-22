const express = require('express')
const Expert = require('../../model/expert')
const controller = require('../base/controller')(Expert, ['user', 'category'])
const authencticateJwt = require('../../module/auth/authenticate')

const router = express.Router()

// create
router.post('/', authencticateJwt, (req, res, next) => {
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
router.patch('/:id', authencticateJwt, (req, res, next) => {
  return controller.update(req, res, next)
})

// delete
router.delete('/:id', authencticateJwt, (req, res, next) => {
  return controller.delete(req, res, next)
})

module.exports = router