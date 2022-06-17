const User = require('../../model/user')
// const jwt = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = async (req, res, next) => {

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


  const { email, password, lastName, firstName, role, avatar } = req.body

  if (!email || !password || !lastName || !firstName || !role) {
    return next(new createError.BadRequest('Missing signup datas.'))
  }

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
