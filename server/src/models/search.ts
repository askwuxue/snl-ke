import { RowDataPacket } from 'mysql2';
import db from '../libs/database';
import { SearchData } from '@/models/search';
import { maxHotKeyWords, maxSuggestKeyWords } from '../configs/server';

// TODO只有async函数才可以返回Promise对象
// export async function getHost(): Promise<SearchData> {
//     // TODO 
//     let data = (await db.query(
//         `SELECT keyword 
//          FROM search_record 
//          ORDER BY count 
//          DESC 
//          LIMIT ${maxHotKeyWords}`
//         ))[0] as RowDataPacket[];
//     // console.log(data);
//     return { 
//         result: data.map(row => row.keyword)
//     };
// }

// 使用下面这种写法，不传递参数可以代替上面的写法。可以实现一个函数实现多个功能
export async function getSuggestion(kw: String): Promise<SearchData> {
    let data = (await db.query(
        `SELECT keyword 
         FROM search_record
         WHERE keyword 
         LIKE ?
         ORDER BY count 
         DESC 
         LIMIT ${maxSuggestKeyWords}`,[
            kw + '%'
         ]
    ))[0] as RowDataPacket[];
    return {
        result: data.map(row => row.keyword)
    }
}