
import Router from '@koa/router';
import database from '../libs/database';
import app from '../libs/server';

app.use( async ctx => {
    // TODO mysql查询到的数组中，数据是rows, files是连接相关的信息。
    const result = await database.query('SELECT * from banner_table;');
    const [rows, fields] = result;
    // console.log('rows: ', rows); 
    ctx.body = rows;
})



