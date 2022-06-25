const User = require('../../model/user')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = async (req, res, next) => {
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
      expiresIn: `${process.env.TOKEN_EXPIRY}`,
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

}
