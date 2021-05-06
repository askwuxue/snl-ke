// Object [Module] { default: [Getter] }
const buildMain = require('./build/main');

// TODO在react前台页面将页面处理成string然后node接受 
const  render  =  buildMain.render();
const fs = require('fs');
const htmlTemp = fs.readFileSync('../web/public/index.html', 'utf-8');

const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
    ctx.body = htmlTemp.replace('<div id="root"></div>', render);
})
app.listen(8000, () => {
    console.log('server started is port 8000...');
});
