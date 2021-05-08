import Koa from 'koa';
import Router from '@koa/router';
// TODO mysql不支持异步操作，使用的是回调函数的方式。所以使用mysql/promise
import mysql from  'mysql2/promise';

const app = new Koa();
const port = 8080;

app.use( async ctx => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'snl'
    });
    // TODO mysql查询到的数组中，数据是rows, files是连接相关的信息。
    const result = await conn.query('SELECT * from banner_table;');
    const [rows, fields] = result;
    console.log('rows: ', rows);
    ctx.body = rows;
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})

