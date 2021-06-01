import React from "react";
import Header from './components/header/header';
import Banner from './components/index/banner';
import "./App.css";
import { AppData, setAppData } from "./models/app";

interface Props {
  appData?: AppData
}

// 如果接受到了数据，就保存到model的数据中。这个地方如果有数据，是后端渲染数据
function App(props: Props) {
  // console.log('SSR render App props: ', JSON.stringify(props.appData));
  // 如果接收到props，设置到models中。前端项目开始的组件是index。index不会传递props到当前组件
  props.appData && setAppData(props.appData)
  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App;
