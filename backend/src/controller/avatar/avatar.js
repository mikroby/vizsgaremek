const { join } = require('path')
const createError = require('http-errors')

module.exports = (req, res, next) => {
  let uploadFile
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new createError.BadRequest('No files were uploaded.'))
  }

  uploadFile = req.files.uploadFile
  uploadPath = join('./public/avatar', uploadFile.name)

  uploadFile.mv(uploadPath, (error) => {
    if (error)
      return next(new createError.InternalServerError(error.message))

    res.json({
      success: true,
      name: uploadFile.name,
      path: uploadPath.replace(/\\/g, '/').replace('public/avatar/', ''),
    })
  })
}