import React from "react";
// import React, {useState, useEffect} from "react";
// import { getAllBanners, BannerData } from './models/banners';
// import Login from './components/login';
import Header from './components/header/header';
import "./App.css";
import CategoryData from "./models/category";

interface Props {
  categories: CategoryData[]
}

function App(props: Props) {
  return <Header categories={props.categories}/>

}

export default App;
