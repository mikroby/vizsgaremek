const config = require('config')
const logger = require('./module/logger')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/swagger.yaml')
const authencticateJwt = require('./module/auth/authenticate')
const { join } = require('path')
const app = express()

const { host, user, pass } = config.get('database')

// Mongoose Connection establishment.
mongoose.connect(`mongodb+srv://${host}`, {
  user,
  pass,
}).then(connection => {
  logger.info('DataBase Connection successfully established!')
  // SEEDER:
  // require('./seed/seeder')
})
  .catch(err => {
    throw new Error(err.message)
  })

// MIDDLEWARES:
// Cross origin resource sharing: CORS
app.use(cors())
// Logging
app.use(morgan('combined', { stream: logger.stream }))
// Static welcome screen serving from public folder.
app.use(express.static('public'))
// JSON parsing the body of incoming request.
app.use(bodyParser.json())


// Login
app.use('/login', require('./controller/login/router'))
// Category
app.use('/category', authencticateJwt, require('./controller/category/router'))
// Customer
app.use('/customer', authencticateJwt, require('./controller/customer/router'))
// Expert
app.use('/expert', authencticateJwt, require('./controller/expert/router'))
// Invoice
app.use('/invoice', authencticateJwt, require('./controller/invoice/router'))
// Order
app.use('/order', authencticateJwt, require('./controller/order/router'))
// SwaggerUI docs available here.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
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