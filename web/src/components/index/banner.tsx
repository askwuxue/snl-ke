import React, { useState, useEffect } from 'react';
import { BannerData } from '../../models/banners';
import { appData } from '../../models/app';
import { getAllBanners } from '../../models/banners';

export default function Banner() {

  // banner 数据
  let [banners, setBanners] = useState<BannerData[] | undefined>(appData?.banners);
  
  // 控制当前显示
  let [curr, setCurr] = useState<number>(0);

  useEffect(() => {
      if (!banners) {
          getAllBanners().then(data  => {
              setBanners(data);
          })
      }
  }, [banners])

  // 点击右切换按钮
  const handleRightArrow = () => {
    if (banners) {
      if (curr < banners.length - 1) {
        setCurr(curr + 1);
      } else {
        setCurr(0);
      }
    }
  }

  // 点击左切换按钮
  const handleLeftArrow = () => {
    if (banners) {
      if (curr > 0) {
        setCurr(curr - 1);
      } else {
        setCurr(banners.length - 1);
      }
    }
  }

  return (
      <div className="banner" style={{backgroundColor: '#' + (banners ? banners[curr].bgColor : '000')}}>
      <div className="page">
        <div className="content">
          <span className="btn btn-prev">
            <i className="icon icon-left-w" onClick={handleLeftArrow}/>
          </span>
          <span className="btn btn-next">
            <i className="icon icon-right-w" onClick={handleRightArrow}/>
          </span>
          {
              banners ? (
                  <ul className="banner-list">
                      {
                          banners.map((item, index) => {
                              return (
                                  <li className={index === curr ? 'active' : ''} key={item.ID}>
                                      <a href={item.href}>
                                      <img src={item.src} alt="" />
                                      </a>
                                  </li>   
                              )
                          })
                      }
                  </ul>
              ) : ''
          }
          {
            banners ? (
              <ol className="indicator-list">
                {
                  banners.map((item, index) => {
                    return (
                      <li key={item.ID} className={index === curr ? 'active': ''}/>
                    )
                  })
                }
              </ol>
            ) : ''
          }
        </div>
        <div className="user">
          <div className="no-user">
            <div className="title">跟进你的学习进度</div>
            <div className="img" />
          </div>
          <div className="login">
            <span className="btn-login">登录</span>
          </div>
        </div>
      </div>
    </div>
  );
}