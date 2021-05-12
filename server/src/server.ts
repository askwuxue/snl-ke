// server的架构部分放在libs中 本文件处理业务逻辑
import app from './libs/server';
import KoaStatic from 'koa-static';
import renderRouter from './routers/render/render';
import apiRouter from './routers/api/api';
import serverConf from '~/server';

const { staticRoot } = serverConf;
app.use(renderRouter);
app.use(apiRouter);

// TODO 对静态资源进行处理 
app.use(KoaStatic(staticRoot));
