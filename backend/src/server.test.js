const app = require('./server')
const mongoose = require('mongoose')
const supertest = require('supertest')
const config = require('config')
const { response } = require('jest-mock-req-res')
const { Test } = require('supertest')

describe('REST API integration tests', () => {
  beforeEach(done => {
    const { host, user, pass } = config.get('database')
    mongoose.connect(`mongodb+srv://${host}`, {
      user,
      pass,
    }).then(connection => {
      console.log('Database Connection successfully established!')

      // autentikáció ide:
      

      done()
    })
      .catch(err => {
        throw new Error(err.message)
      })
  })

  afterEach(done => {
    mongoose.connection.close(() => done())
  })

  test('GET /category', done => {
    supertest(app).get('/category').expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })
  
  test('GET /expert', done => {
    supertest(app).get('/expert').expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })
  
  test('GET /user', done => {
    supertest(app).get('/user').expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

  test('GET /invoice', done => {
    supertest(app).get('/invoice').expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })
  
  test('GET /order', done => {
    supertest(app).get('/order').expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

})
