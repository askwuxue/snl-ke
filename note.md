# 在线课堂

## 准备阶段

1. 扩展性，项目之间的共享

2. 前台渲染，后台渲染

   后台渲染：安全性高，SEO 友好，性能开销更大，用户体验不好。

   前台渲染：所有功能走后端，服务器的压力大。

3. 底层兼容 ts
4. 高负载处理

react 后台？后台加前台。

后端渲染的原理

1. react-dom server 版
2. jsx -> webpack + bable -> js
3. node 里面使用 reactDOMserver 库`react-dom/server`，完成组件渲染 js -> string

服务端渲染

1. `yarn add webpack webpack-cli @babel/core @babel/preset-react babel-loadr`

   `react`.`react-dom`

2. 配置 webpack

   ![image-20210506210633900](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20210506210633900.png)

3. `reactDOMServer.renderToString();`

4. `ReactDOM.hydrate`代替 render 进行前端渲染

5. 混合渲染：速度快

6. hydrate 原理，兼容客户端渲染

   1. 检测 div#root，有没有内容

      - 没有

        - 调用 render

      - 有
        - 忽略初始渲染，如果有数据修改了调用 render

   2. 检查服务端过来的内容与组件内的内容保持一致。hydrate 渲染里面的内容，不能有空格。

服务器

1. API 相关
2. 服务端 + react 渲染。（上线时使用）

### typescript

node 使用 ts，webpack 使用 ts-loader

react tsx->jax->js

修改了 webpack.config.js 的名称话，启动

--config webpack.xxxx.js --mode development

tsx -init

### node 端使用 ts

`koa`

`@koa/router`

大部分的库，需要`ts`的声明文件。

@types/koa @types/koa_router

有些库需要@types/xxxx

webpack-node-externals

1. 配置 webpack

const webpackNodeExternals = require('')

- externals: [

webpackNodeExternals ();

]

- target: node

### tsx 编译成 node 端执行

`awesome-typescript-loader` 比 ts-loader 好用

ts-loader 会隐藏错误信息。

tsconfig.json 中的 skiplibCheck 跳过库的类型检查

xxx.d.ts

declare module "\*.svg" {

​ const value: 'any';

​ export default value;

}

webpack 配置

resolve: {

​ // 所有按顺序去尝试的拓展名

​ extendions: ['.ts', '.tsx']

}

// 编译环境的配置

// 别名

alias: {

'@': 'xxx/xxxx'

}

// 开发环境的配置

tsconfig.json 中的 paths: {

​ // 与 alias 的写法不太一致

​ "a/\*": []

}

### 后端

数据

1. 逻辑性，关联性比较强的数据。存数据库
2. 简单的请求数据。 `no-sql` 、`Redis`
3. 日志 文件

高负载

1. ## 优化
2. 分布式

### 数据库 MySQL

npm MySQL2/promise

msql.createConnecttion({

​ host: 'localhost',

​ port: 3306,

​ user: 'root',

​ password: 'xxxx',

​ database: 'xxxx'

})

conn.query('sql XXXX', (err, rows) => {})

### 数据库

#### 长连接

#### 连接池 解决多人访问卡顿

createPool()
createPoolCluster() 集群

#### 拆分 server

1. 数据库 libs folder
   - export 导出函数，promise
2. 拆分配置文件

### Redis

1. 适合简单查询，key-value 键值对

   - 数据库支持复杂查询。性能相较于 NoSQL 较差
   - 安装 Redis
     - const client = redis.createClient({
       host: 'localhost',
       port: 6379,
       });
     - client.set('key', 'value', callback)
     - client.get(key, callback)

2.models 数据库和 Redis 数据类型控制

#### 项目

1. 前台，后台混合渲染
2. 模块化
3. typescript

##### 路由配置

yarn add koa-static
ts static 是一个关键字

style-loader css-loader 对 css 处理

#### 关于 nodeJS 的路径问题

nodeJS 执行是根据当前命令的执行地址确定的。
path.resolve(\_\_dirname, path);
对路径进行配置 静态资源

#### API

对路由进行配置 路由主文件 路由文件
将 server 抽离到 routers

#### 环境配置

工作在 webpack 下的 Node 有变量`process.env.NODE_ENV` 取值为 webpack 中的 mode

服务算渲染根据环境进行渲染。开发阶段不执行

##### 启动命令配置

先进行一次 build，后面并行命令执行不会报错

```js
"start": "yarn build-env & npm-run-all --parallel build-watch nodemon",
```

##### 跨域

1. http-proxy-middleware 使用

2. cors

- 简单请求
  - get、没有自定义头。就是自定义请求。
- 复杂请求 返回三个头给浏览器才可以跨域

  1.  method: options
      不允许

      允许
      返回三个头给浏览器才可以跨域

  2.  真正的请求。
