const Koa = require('koa')
const KoaJson = require('koa-json')
const KoaBodyParser = require('koa-bodyparser')
const routes = require('./koa_router/routes.js')
const utils = require('./koa_utils/utils.js')
const config = require('./config.js')
const http = require('http')
const app = new Koa()
app.use(KoaBodyParser())
app.use(KoaJson())
app.use(async (ctx: any, next: any) => {
  ctx.execSql = utils.query
  await next()
})
const { SERVICE } = config
app.use(routes.routes())
http.createServer(app.callback())
  .listen(SERVICE.port)
  .on('listening', function () {
    console.info(`服务已开启，端口${SERVICE.port}`)
  })