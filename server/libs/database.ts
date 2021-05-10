// TODO mysql不支持异步操作，使用的是回调函数的方式。所以使用mysql/promise
import mysql from  'mysql2/promise';
// 导入DB配置
import { db } from '../configs/db';
// TODO 创建连接池
export default mysql.createPool(db)
