// TODO ts的引入模块方式 不是commonjs
import Koa from 'koa';
import Router from '@koa/router';
// TODO 服务端渲染tsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// TODO webpack 配置alias配置编译环境的@  tsconfig.json 配置编辑器环境paths。写法是 "@/*": ["xxx/*"]
import App from '@/App';

const app = new Koa();
const router = new Router();


router.get('/', async ctx => {
    // TODO 如果想要使用<APP /> 文件名后缀名必须是.tsx
    // ctx.body = ReactDOMServer.renderToString(<App />);
})

app.use(router.routes());

app.listen(8000, () => {
    console.log('server started at port 8000...');
})