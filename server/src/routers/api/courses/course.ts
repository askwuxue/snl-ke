import Router from '@koa/router';
import { getAllBanners } from '../../../models/banner';
import http from '~/http';

const router = new Router();

router.get('/course', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getAllBanners();
})

router.post('/course', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getAllBanners();
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()