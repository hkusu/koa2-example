import Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
    console.log(`${ctx.method} ${ctx.url}`)
  } catch (err) {
    ctx.body = err.message
    ctx.status = err.status || 500
    console.error(err.message)
  }
})

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

app.listen(3000)
