// import React, {useState, useEffect} from "react";
// import { getAllBanners, BannerData } from './models/banners';
import Login from './components/login';
import "./App.css";

function App() {

  return <Login></Login>

  // const [data, setData] = useState<BannerData[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     let res = await getAllBanners();
  //     setData(res);
  //   })()
  // }, [])

 
  // return <div className="App">
  //   aaa
  //   {
  //     data.map(item => {
  //       return <p key={item.ID}>{item.href}</p>
  //     })
  //   }
  // </div>;

}

export default App;
