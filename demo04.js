// koa-router 基础版
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// const router = new Router({
//   prefix:'/world'
// }) 
// 全局前缀 http://localhost:3000/world/todo

//请求方式   http://localhost:3000/product/123
router.get('/product/:aid',async (ctx)=>{
    console.log(ctx.params); //{ aid: '123' }  //获取动态路由的数据
    ctx.body='这是商品页面';
 })

router.get('/', function (ctx, next) {
    ctx.body = "Hello world"
    // ctx.body= ctx.query 接收参数
})
router.get('/todo',(ctx,next)=>{
  ctx.body = "Todo page"
})
app.use(router.routes())
app.use(router.allowedMethods()) // 判断请求类型
app.listen(3000,()=>{
    console.log('starting at port 3000')
})