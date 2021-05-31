import axios from 'axios';
export interface SearchData {
    result: String[];
}

export async function getSearchData(): Promise<SearchData> {
    let { data } = await axios({
        method: 'get',
        url: 'http://localhost:8000/api/site/get-searchdata'
    })
    return data;
}