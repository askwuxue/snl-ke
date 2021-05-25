import CategoryData from '@/models/category';
import db from '../libs/database';
import { get, set, KEY_APP_CATEGORY_CATCH } from '../libs/redis';
import config from '../configs/server';

// 是否开启Redis 
const { enableCatch } = config;

export async function getCategory(): Promise<CategoryData[]> {
    // 1. redis
    if (enableCatch) {
        let str = await get(KEY_APP_CATEGORY_CATCH);
        if (str) {
            // TODO 错误处理。出现错误不读取Redis
            try {
                return JSON.parse(str);
            } catch (e) {
            }
        }
    }


    // 2. first request
    let categories = (await db.query('SELECT * FROM category;'))[0] as any[];
    let item = (await db.query('SELECT * FROM category_item;'))[0] as any[];
    // console.log('categories: ', categories);
    let arr: CategoryData[] = [];
    
    categories.forEach(data => {
        let { parent_id } = data;
        // TODO 顶级
        if (parent_id === 0) {
            arr.push(data);
        } else {
            // TODO 根据parent_id 寻找公共的父级，是一个对象
            let parent = categories.find(data => data.ID === parent_id);
            if (parent) {
                // 为对象添加一个属性数组
                parent.children = parent.children || [];
                // 将parent_id ！== 0 的元素添加到公共的父级对象中
                parent.children.push(data);
            }
        }
    });

    // TODO 还是为属性添加属性数组
    item.forEach(item => {
        let parent = categories.find(data => data.ID === item.category_id);
        if (parent) {
            parent.items = parent.items ? parent.items : [];
            parent.items.push(item);
        }
    })

    // 返回解决之前写入Redis
    if (enableCatch) {
        await set(KEY_APP_CATEGORY_CATCH, JSON.stringify(arr));
    }

    // console.log('arr: ', JSON.stringify(arr));
    return arr;
}
