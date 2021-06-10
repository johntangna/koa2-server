const Koa = require('koa')
const app = new Koa()
app.use(async (ctx: any) => {
  ctx.body = 'hello world'
})
app.listen(8589)