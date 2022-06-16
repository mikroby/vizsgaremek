const express = require('express')
const User = require('../../model/user')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const router = express.Router()

// POST request
router.post('/', async (req, res, next) => {

  // TESZT USER REGISZTRÁLÁSA: (fetch POST kérésre a böngészőből)
  // const newUser = new User({
  //     email: 'a@a.hu',
  //     lastName: 'Admin',
  //     firstName: 'Aladár',
  //     password: '012',
  //     role: 3
  // })

  // const newUser = new User({
  //     email: 'x@x.hu',
  //     lastName: 'Expert',
  //     firstName: 'Ede',
  //     password: '012',
  //     role: 2
  // })

  console.log(req.url);

  if (req.url === '/signup') {
    const { email, password, lastName, firstName, role, avatar } = req.body
    const newUser = new User({
      email,
      password,
      lastName,
      firstName,
      role,
      avatar
    })
    try {
      await newUser.save()
    } catch (error) {
      return next(new createError.Unauthorized('Signup process failed.'))
    }
    return res.json({ message: 'user created' })
  }


  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    // user not registered
    return next(new createError.Unauthorized('Authorization process failed.'))
  }

  const valid = user.verifyPasswordSync(password)

  if (valid) {
    // Login successful, sign access_token
    const accessToken = jwt.sign({
      _id: user._id,
      email: user.email,
      role: user.role,
    }, `${process.env.ACCES_TOKEN_SECRET}`, {
      expiresIn: process.env.TOKEN_EXPIRY,
    })
    // send access_token and user datas to frontend
    res.json({
      success: true,
      accessToken,
      user: { ...user._doc, password: '' },
    })
  } else {
    // bad password
    return next(new createError.Unauthorized('Authorization process failed.'))
  }

})

module.exports = router

