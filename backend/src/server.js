const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const { join } = require('path')

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
// Static welcome screen serving from public folder.
app.use(express.static('public'))
// JSON parsing the body of incoming request.
app.use(bodyParser.json())

// Category
app.use('/category', require('./controller/category/router'))
// Customer
app.use('/customer', require('./controller/customer/router'))
// Expert
app.use('/expert', require('./controller/expert/router'))
// Invoice
app.use('/invoice', require('./controller/invoice/router'))
// Order
app.use('/order', require('./controller/order/router'))

// request for anything else sends a welcome screen.
app.use('/', (req, res, next) => {
  console.log(req.url)
  res.sendFile('index.html', { root: join(__dirname, '../public/') })
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