require('dotenv').config()
const app = require('./server')
const mongoose = require('mongoose')
const supertest = require('supertest')
const config = require('config')

let token

describe('REST API integration tests', () => {
  beforeEach(done => {
    const { host, user, pass } = config.get('database')
    mongoose.connect(`mongodb+srv://${host}`, {
      user,
      pass,
    }).then(connection => {
      console.log('Database Connection successfully established!')
      
      supertest(app).post('/login')
        .set('Content-Type', 'application/json')
        .send({
          email: 'a@a.hu',
          password: '012'
        })
        .end((err, res) => {
          token = res.body.accessToken
          done()
        })

    })
      .catch(err => {
        throw new Error(err.message)
      })
  })

  afterEach(done => {
    mongoose.connection.close(() => done())
  })

  test('GET /category', done => {
    supertest(app).get('/category/')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

  test('GET /expert', done => {
    supertest(app).get('/expert')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

  test('GET /user', done => {
    supertest(app).get('/user')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

  test('GET /invoice', done => {
    supertest(app).get('/invoice')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

  test('GET /order', done => {
    supertest(app).get('/order')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        done()
      })
  })

})
