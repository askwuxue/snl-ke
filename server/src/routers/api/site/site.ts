import Router from '@koa/router';
import { getCategory } from '../../../models/category';
import http from '~/http';

const router = new Router();
router.prefix('/site');

router.get('/categories', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getCategory();
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()