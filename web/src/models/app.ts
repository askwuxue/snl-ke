import CategoryData from '../models/category';

// 定义数据格式
export interface AppData {
    categories: CategoryData[] | undefined
}

// 对数据进行修改保存
export function setAppData(data: AppData) {
    appData = data;
}

// 定义导出的数据格式
export let appData: AppData = {
    categories: undefined
}