import database from '../libs/database';
import { BannerData } from '@/models/banners';

// 返回的是Promise类型的BannerData数组
export async function getAllBanners(): Promise<BannerData[]> {
    // TODO mysql查询到的数组中，数据是rows, files是连接相关的信息。
    const result = (await database.query(`SELECT ID, src, href, bgColor  
        FROM banner 
        ORDER BY sort 
        ASC;`))[0] as BannerData[];
    return result;
}