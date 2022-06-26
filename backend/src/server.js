const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const { join } = require('path')
const fileUpload = require('express-fileupload')
// const swaggerUi = require('swagger-ui-express')
// const YAML = require('yamljs')

const { host, user, pass } = config.get('database')
const logger = require('./module/logger')
const authencticateJwt = require('./module/auth/authenticate')
// const swaggerDocument = YAML.load('./docs/swagger.yaml')

const app = express()

mongoose.connect(`mongodb+srv://${host}`, {
  user,
  pass,
}).then(connection => {
  logger.info('DataBase Connection successfully established!')
  // require('./seed/seeder')
})
  .catch(err => {
    throw new Error(err.message)
  })

app.use(cors())

// app.use(morgan('combined', { stream: logger.stream }))

app.use(express.static('public'))

app.use(bodyParser.json())

app.use(fileUpload())
app.post('/upload/avatar', authencticateJwt, require('./controller/avatar/avatar') )
app.post('/upload/logo', authencticateJwt, require('./controller/logo/logo') )

app.post('/login', require('./module/auth/login'))

app.post('/signup', require('./module/auth/signup'))

// find authentication in the routers
app.use('/category', require('./controller/category/router'))
app.use('/expert', require('./controller/expert/router'))

app.use('/user', authencticateJwt, require('./controller/user/router'))

app.use('/invoice', authencticateJwt, require('./controller/invoice/router'))

app.use('/order', authencticateJwt, require('./controller/order/router'))

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api-docs', (req, res,) => { res.sendStatus(404) })

app.get('/welcome', (req, res, next) => {
  console.log(req.url)
  res.sendFile('index.html', { root: '/welcome' })
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
