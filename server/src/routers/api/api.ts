import Router from '@koa/router';
import userRouter from './users/user';
import courseRouter from './courses/course';

const router = new Router();

// 为当前的路由加一个前缀。如果当前路由是user 加入前缀api
router.prefix('/api');

// 使用一个中间件路由。通过中间价跳转的感觉
router.use(userRouter);
router.use(courseRouter);

export default router.routes();