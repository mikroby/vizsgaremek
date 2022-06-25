require('dotenv').config()
const config = require('config')
const logger = require('./module/logger')
const port = process.env.port || 3000

const app = require('./server')

if (!config.has('database')) {
  logger.error('No database config found. App terminated.')
  process.exit()
}

app.listen(port, () => {
  console.log(`API Server is listening at http://localhost:${port}`)
})
