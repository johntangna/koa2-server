const sha1 = require('sha1')
const Koa = require('koa')
const convert = require('koa-convert');
const KoaJson = require('koa-json')
const KoaBodyParser = require('koa-bodyparser')
const routes = require('./koa_router/routes.js')
const utils = require('./koa_utils/utils.js')
const config = require('./config.js')
const http = require('http')
const app = new Koa()
app.use(convert(KoaBodyParser()))
app.use(convert(KoaJson()))

const { SERVICE, WECHAT } = config
app.use(convert(routes.routes())).use(convert(routes.allowedMethods()))
app.use(async (ctx: any, next: any) => {
  ctx.execSql = utils.query
  const token = WECHAT.token
  const signature = ctx.request.query.signature
  const nonce = ctx.request.query.nonce
  const timestamp = ctx.request.query.timestamp
  const echostr = ctx.request.query.echostr
  let str = [token, timestamp, nonce].sort().join('')
  const sha = sha1(str)
  ctx.body = sha === signature ? echostr + '' : 'failed'
  await next()
})
http.createServer(app.callback())
  .listen(SERVICE.port)
  .on('listening', function () {
    console.info(`服务已开启，端口${SERVICE.port}`)
  })