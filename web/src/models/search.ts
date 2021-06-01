import axios from 'axios';
export interface SearchData {
    result: String[];
}

export async function getSearchData(): Promise<SearchData> {
    let { data } = await axios({
        method: 'GET',
        url: 'http://localhost:8000/api/site/get-searchdata'
    })
    return data;
}

export async function getSuggest(kw: string): Promise<SearchData> {
    let { data } = await axios({
        method: 'GET',
        url: `http://localhost:8000/api/site/suggest/${kw}`
    })
    return data;
}