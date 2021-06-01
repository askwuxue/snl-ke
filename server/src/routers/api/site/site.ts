import Router from '@koa/router';
import { getCategory } from '../../../models/category';
import http from '~/http';
import { getSuggestion } from '../../../models/search';
import { getAllBanners } from '../../../models/banner'

const router = new Router();
router.prefix('/site');

// 获取分类
router.get('/categories', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getCategory();
})

// 获取全站的搜索热点
router.get('/get-searchdata', async ctx => {
    ctx.set(http.cors);
    ctx.body = await getSuggestion('');
})

// 根据用户的搜索关键字查询 前端路由使用参数时，使用path\parameter形式
router.get('/suggest/:kw', async ctx => {
    let kw: string = ctx.params.kw;
    ctx.set(http.simple);
    ctx.body = await getSuggestion(kw)
})

// 获取首页banner信息
router.get('/banners', async ctx => {
    ctx.set(http.simple);
    ctx.body = await getAllBanners();
})

// 将路由的routes导出作为一个中间件使用
export default router.routes()