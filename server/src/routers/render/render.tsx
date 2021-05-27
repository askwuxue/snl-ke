import Router from '@koa/router';
import React from 'react';
// server端使用的处理react-dom
import ReactDOMServer from 'react-dom/server';
import App from '@/App';
import fs from 'fs';
import serverConf from '~/server';
import { getCategory } from '../../models/category';

const router = new Router();
const { staticRoot } = serverConf; 
const mode = process.env.NODE_ENV;

router.get('/', async ctx => {
    let categories = await getCategory();
    let appData = {
        categories
    }
    // TODO 生产环境开启SSR
    if (mode === 'production') {
        const indexHtml = fs.readFileSync(`${staticRoot}/index.html`).toString();
        // ReactDOMServer.renderToString(<App />) 将组建转成了普通的html,js代码
        const app = ReactDOMServer.renderToString(<App appData={appData}/>);
        // TODO 实际上服务端只是在后端根据模板渲染数据，样式文件，图片等文件。都是前端打包好的
        // 后端配置webpack对样式等资源的处理因为引入了一个前端的组件，这个组件中使用了资源。
        const res = indexHtml.replace('<div id="root"></div>',
            `<script>
                window.categories = ${JSON.stringify(categories)}
            </script>
            <div id="root">${app}</div>`
        );
        ctx.body = res; 
    } else {
        ctx.body = 'ssr is not open because is development'
    }
})

export default router.routes();