// TODO ts的引入模块方式 不是commonjs
import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'hello';
})

app.use(router.routes());

app.listen(8000, () => {
    console.log('server started at port 8000...');
})