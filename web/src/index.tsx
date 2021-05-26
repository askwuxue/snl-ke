import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/index.less';
import './assets/css/base.less';
import './assets/css/common.less';

// TODO 后端渲染，为Windows对象添加categories属性数据。前端加载时，直接可以获取数据
const categories = (window as any).categories;
// console.log(process.env.NODE_ENV);
// TODO 根据当前的环境决定是否使用hydrate渲染
const mode = process.env.NODE_ENV;
const render = mode === 'development' ? ReactDOM.render : ReactDOM.hydrate;
render(
  <React.StrictMode>
    <App categories={categories}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
