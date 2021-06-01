import axios from 'axios';
export interface BannerData {
  ID: number,
  src: string,
  href: string,
}

// 请求banner数据
export async function getAllBanners(): Promise<BannerData[]> {
    let { data } = await axios({
        method: "GET",
        url: "http://localhost:8000/api/site/banners",
        headers: {
          'Accept': 'text/plain',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
          // TODO 模拟了一个复杂请求
          'X-Custom-Header': 'test'
        }
    });
    return data;
}