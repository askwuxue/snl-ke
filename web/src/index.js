import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// TODO 使用hydrate 对服务器返回的数据进行处理，如果root下面有内容，忽略首次渲染。只有当页面内容发生变化的时候才调用render。首次是SSR渲染。
ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );

reportWebVitals();
