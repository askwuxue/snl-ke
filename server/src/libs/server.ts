// 本文件是server的架构部分，不处理具体业务逻辑
import Koa from 'koa';
import serverConf from '~/server';
const app = new Koa();
const { serverPort } = serverConf;

app.listen(serverPort, () => {
    console.log(`server started at port ${serverPort}`);
})

export default app;