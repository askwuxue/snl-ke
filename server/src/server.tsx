
import Router from '@koa/router';
import app from '../libs/server';
import * as redis from '../libs/redis';
import { getAllBanners } from '../models/banner';

app.use( async ctx => {
    // 返回的是一个Promise对象，Promise的结果是BannerData类型的数组
    ctx.body = await getAllBanners();
})

// 使用Redis
// app.use(async ctx => {
//     ctx.body = await redis.get('a');
// })




