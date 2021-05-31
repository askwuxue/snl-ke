import path from 'path';
// 静态文件路径
const staticRoot = path.resolve(__dirname);
export default {
    serverPort:8000,
    // 静态文件路径
    staticRoot: staticRoot,
    enableCatch: true,
}

export const maxHotKeyWords = 5;
export const maxSuggestKeyWords = 10;