const jwt = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // 'Bearer access_token' -> access_token
    const token = authHeader.split(' ')[1];
    jwt.verify(token, `${process.env.ACCES_TOKEN_SECRET}`, (err, user) => {
      if (err) {
        // got bad token
        return next(new createError.Forbidden('Forbidden: authorization needed.'))
      }

      req.user = user;
      next();
    });
  } else {
    // got no token
    next(new createError.Unauthorized('Authorization process failed.'))
  }
};
