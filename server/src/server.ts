// server的架构部分放在libs中 本文件处理业务逻辑
import app from './libs/server';
import KoaStatic from 'koa-static';
import renderRouter from './routers/render/render';
import apiRouter from './routers/api/api';
import serverConf from '~/server';
import http from '~/http';

const { staticRoot } = serverConf;
 
app.use(async (ctx, next) => {
    // TODO 对于复杂请求的首次OPTION请求，必须返回一个OK的结果，后续的请求才可以继续发送。
    if (ctx.method === 'OPTIONS') {
        ctx.res.statusCode = 200;
        ctx.set(http.cors);
    }

    // TODO将中间件的结果返回才会接着执行
    await next()
})

app.use(renderRouter);
app.use(apiRouter);

// TODO 对静态资源进行处理 
app.use(KoaStatic(staticRoot));
