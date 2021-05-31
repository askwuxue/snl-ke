import Router from '@koa/router';
import { getCategory } from '../../../models/category';
import http from '~/http';
import { getSuggestion } from '../../../models/search';

const router = new Router();
router.prefix('/site');

router.get('/categories', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getCategory();
})

router.get('/get-searchdata', async ctx => {
    ctx.set(http.cors);
    ctx.body = await getSuggestion('');
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()