const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // 'Bearer access_token' -> access_token
    const token = authHeader.split(' ')[1];
    jwt.verify(token, `${process.env.ACCES_TOKEN_SECRET}`, (err, user) => {
      if (err) {
        // got bad token
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    // got no token
    res.sendStatus(401);
  }
};
