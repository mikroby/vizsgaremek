const User = require('../../model/user')
const createError = require('http-errors')


module.exports = async (req, res, next) => {
  const { email, password, lastName, firstName, role, avatar } = req.body

  if (!email || !password || !lastName || !firstName || !role) {
    return next(new createError.BadRequest('Missing some credentials.'))
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
