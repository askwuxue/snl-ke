import CategoryData from '../models/category';
import { SearchData } from '../models/search';
import { BannerData } from '../models/banners';

// 定义数据格式
export interface AppData {
    categories?: CategoryData[];
    searchData?: SearchData
    banners?: BannerData[]
}

// 对数据进行修改保存
export function setAppData(data: AppData) {
    appData = data;
}

// 定义导出的数据格式,如果浏览器环境，才使用window上的属性，不是浏览器环境默认为undefined
export let appData: AppData;

// 注意undefined字符串 
if (typeof window !== 'undefined') {
    appData = (window as any).appData;
} else {
    appData = {
        categories: undefined,
        searchData: undefined,
        banners: undefined,
    }
}