const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

// átírni oda!
const applicationName = process.env.port || 'MesterEmber'

const app = express()

const { host, user, pass } = config.get('database')

// Mongoose Connection establishment.
mongoose.connect(`mongodb+srv://${host}`, {
  user,
  pass,
}).then(connection => {
  console.log('DataBase Connection successfully established!')
  // to run seeder:
  // require('./seed/seeder')
})
  .catch(err => {
    throw new Error(err.message)
  })

// MIDDLEWARES:
// Cross origin resource sharing: CORS
app.use(cors())
// Static files serving from public folder.
app.use(express.static('public'))
// JSON parsing the body of incoming request.
app.use(bodyParser.json())

// Category controller-router call.
app.use('/category', require('./controller/category/router'))
// Customer controller-router call.
app.use('/customer', require('./controller/customer/router'))
// Expert controller-router call.
app.use('/expert', require('./controller/expert/router'))
// Invoice controller-router call.
app.use('/invoice', require('./controller/invoice/router'))
// Order controller-router call.
app.use('/order', require('./controller/order/router'))

// request for root sending a welcome message.
app.use('/', (req, res) => {
  console.log(req.url)
  res.send(`Welcome! This is The API Server for ${applicationName} Application!`)
})

// Error Handling.
app.use((err, req, res, next) => {
  res.status = 500
  res.json({
    hasError: true,
    message: 'Server Error',
  })
})

module.exports = app

// még nincs rendes logolás file-ba, hibakezelést át kell még nézni.