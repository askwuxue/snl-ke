// TODO 对于svg这种没有类型的文件，ts语法检测会报错。使用类型声明文件。告诉ts svg的类型是any，以后不询问。
// tsconfig.json 中 "declaration": true 编译的时候回生成类型声明文件 .d.ts 文件。
declare module "*.svg" {
    const value: any;
    export default value;
}