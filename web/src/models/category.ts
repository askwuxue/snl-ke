import axios from 'axios';
export default interface CategoryData {
    ID: Number,
    title: String,
    items?: CategoryData[],
    children?: CategoryData[]
}

// 请求数据后台数据
export async function getCategories(): Promise<CategoryData[]> {
    let { data } = await axios({
        method: 'get',
        url: 'http://localhost:8000/api/site/categories'
    });
    return data;
}