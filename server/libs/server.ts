import Koa from 'koa';
import server from '../configs/server';
const app = new Koa();
const { port } = server;

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})

export default app;