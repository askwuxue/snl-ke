import Router from '@koa/router';

const router = new Router();

router.get('/course', async ctx => {
    ctx.body = 'api/course';
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()