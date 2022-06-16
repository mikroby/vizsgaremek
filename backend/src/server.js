const config = require('config')
const logger = require('./module/logger')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
// const swaggerUi = require('swagger-ui-express')
// const YAML = require('yamljs')
// const swaggerDocument = YAML.load('./docs/swagger.yaml')
const { join } = require('path')
const app = express()

const authencticateJwt = require('./module/auth/authenticate')
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
// TEMPORARILY OFF !
// app.use(morgan('combined', { stream: logger.stream }))
// Static welcome screen serving from public folder.
app.use(express.static('public'))
// JSON parsing the body of incoming request.
app.use(bodyParser.json())


// Login
app.use('/login', require('./controller/login/router'))
// Signup


// Category
app.use('/category', authencticateJwt, require('./controller/category/router'))
// Customer
app.use('/customer', authencticateJwt, require('./controller/customer/router'))
// Expert
app.use('/expert',  require('./controller/expert/router'))
// Invoice
app.use('/invoice', authencticateJwt, require('./controller/invoice/router'))
// Order
app.use('/order', authencticateJwt, require('./controller/order/router'))
// SwaggerUI docs available here. temporarily 404
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api-docs', (req, res,) => { res.sendStatus(404) })
// request for /welcome sends a welcome screen.
app.get('/welcome', (req, res, next) => {
  console.log(req.url)
  res.sendFile('index.html', { root: join(__dirname, '../welcome/') })
})

// Error Handling.
app.use((err, req, res, next) => {
  res.status(err.statusCode)
  res.json({
    hasError: true,
    message: err.message,
  })
})

module.exports = app
