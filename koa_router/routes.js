const path = require('path')
const fs = require('fs')
const router = require('koa-router')()

const config = require('../config')
const projectPrefix = config.API.PROJECT_INTERFACE_PREFIX
fs.readdirSync('./koa_controller').forEach((file) => {
  if (~file.indexOf('.js')) {
    let controller = require(path.join('../', 'koa_controller', file))
    router.use(`${projectPrefix}`, controller.routes(), controller.allowedMethods())
  }
})

module.exports = router