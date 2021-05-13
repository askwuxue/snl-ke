import Router from '@koa/router';
import { getAllBanners } from '../../../models/banner';

const router = new Router();

router.get('/course', async ctx => {
    ctx.set({
        'Access-Control-Allow-Origin': '*'
    })
    ctx.body = await getAllBanners();
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()