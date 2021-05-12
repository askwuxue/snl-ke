import Router from '@koa/router';

const router = new Router();

router.get('/user', async ctx => {
    ctx.body = 'api/user';
})

export default router.routes()