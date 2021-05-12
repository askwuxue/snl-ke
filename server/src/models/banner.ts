import database from '../libs/database';
export interface BannerData {
    ID: number,
    img: string,
    href: string,
    sort: number
}

// 返回的是Promise类型的BannerData数组
export async function getAllBanners(): Promise<BannerData[]> {
    // TODO mysql查询到的数组中，数据是rows, files是连接相关的信息。
    const result = await database.query('SELECT * from banner_table;');
    // TODO 将result 强制转成BannerData类型的数组
    const rows = result[0] as BannerData[];
    return rows;
}