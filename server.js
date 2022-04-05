
// 注册路径
require('module-alias/register')
const koaRouter  = require('koa-router')
const { parseParam } = require('./utils/index')

const Koa = require('koa')
const app = new Koa()
const router = koaRouter()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const koaJwt = require('koa-jwt')
const cors = require('koa2-cors')
const multer = require('koa-multer')
const chalk = require('chalk')
const { join } = require('path')
const fs = require('fs');
const path = require('path');

const {getSongUrl} = require('@controller/song');
const context = require('@extends/context')
const { secretKey, whiteList } = require('@core/jwt')
const config = require('@config')
const db = require('@models');
// error handler
onerror(app)

// 处理前端 history 模式
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const token = require("@middlewares/authVerify.js")

// 添加执行上下文参数
app.use(context)

app.use(
  cors({
    origin: '*',
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: [
      'Origin',
      'Content-Type',
      'X-Requested-With',
      'if-modified-since',
      'Content-Type',
      'Authorization',
      'Accept',
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Credentials" // 允许携带验证信息
    ], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], //设置获取其他自定义字段
  }),
)

// // jwt
// app.use(
//   koaJwt({
//     secret: secretKey,
//   }).unless({
//     path: whiteList,
//   }),
// )

app.use(
  koaBody({
    enableTypes: ['json', 'form', 'text'],
  }),
)
app.use(json())
app.use(logger())
//文件上传处理
const storage = multer.diskStorage({
  // 存储的位置
  destination: join(process.cwd(), "upload"),
  // 文件名
  filename(req, file, cb){
    const filename = file.originalname.split(".")
    cb(null, `${Date.now()}.${filename[filename.length - 1]}`)
  }
})
const upload = multer({ storage })


const static = require('koa-static')
const range = require('koa-range');
app.use(range)
app.use(require('koa-static')(__dirname + '/upload'))

app.use(
  views(__dirname + '/views', {
    extension: 'html',
  }),
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// // app.use(koaJwt({secret:global.secret}).unless({
// //     path:[
// //         /\/user\/login/,
// //         /\/album\/personalized/,
// //         /\/banner\/list/
// //     ]
// // }));
// app.use(token)
// routes
const Banner = require('@routes/banner')
const Album = require('@routes/album')
const Singer = require('@routes/singer')
const Song = require('@routes/song')
const Search = require('@routes/search')
const User = require('@routes/user')
const Admin = require('@routes/admin')
const User_Album_Song = require('@routes/user_album_song')

router.post('/profile', upload.single('file'), async ctx => {

      ctx.body = {
        filename: ctx.req.file.filename || ctx.req.file.name
        // filename: `http://localhost:6060/${ctx.req.file.filename}`

      }
});

app.use(router.routes()).use(router.allowedMethods())

app.use(Banner.routes(), Banner.allowedMethods())
app.use(Album.routes(), Album.allowedMethods())
app.use(Singer.routes(), Singer.allowedMethods())
app.use(Song.routes(), Song.allowedMethods())
app.use(Search.routes(), Search.allowedMethods())
app.use(User.routes(), User.allowedMethods())
app.use(Admin.routes(), Admin.allowedMethods())
app.use(User_Album_Song.routes(), User_Album_Song.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(config.PORT, () => {
  db.sequelize
    .sync({ force: false }) // If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
    .then(async () => {
      console.log('sequelize connect success')
      console.log(`sever listen on http://127.0.0.1:${config.PORT}`)
    })
    .catch(err => {
      console.log(err)
    })
})
