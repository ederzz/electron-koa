const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const fs = require('fs')

const app = new Koa();
const router = new Router();

router.post('/submitForm', (ctx, next) => {
    const {
        body: {
            content
        }
    } = ctx.request
    fs.writeFileSync('../test.txt', content)
})
  

/**解析post请求 */
app.use(bodyParser());
app.use(router.routes())

app.listen(3002, () => {
    console.log('成功启动koa项目~~')
});