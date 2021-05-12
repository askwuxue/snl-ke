import redis from 'redis';
import { promisify } from 'util';
import redisConf from '~/redis';

const client = redis.createClient(redisConf);

// TODO promisify将回调类型的函数转换为promise风格，会导致this丢失。需要重新绑定this
export const set = promisify(client.set).bind(client);
export const get = promisify(client.get).bind(client);

