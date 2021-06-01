import React, { useState, useEffect } from 'react';
import { BannerData } from '../../models/banners';
import { appData } from '../../models/app';
import { getAllBanners } from '../../models/banners';

export default function Banner() {

    let [banners, setBanners] = useState<BannerData[] | undefined>(appData?.banners);

    useEffect(() => {
        if (!banners) {
            getAllBanners().then(data  => {
                console.log(data);
                setBanners(banners);
            })
        }
    }, [banners])

    return (
        <div className="banner">
        <div className="page">
          <div className="content">
            <span className="btn btn-prev">
              <i className="icon icon-left-w" />
            </span>
            <span className="btn btn-next">
              <i className="icon icon-right-w" />
            </span>
            {/* {
                banners ? (
                    <ul className="banner-list">
                        {
                            banners.map(item => {
                                return (
                                    <div>{item.src}</div>
                                    // <li className='active'>
                                    //     <a href={item.href}>
                                    //     <img src={item.src} alt="" />
                                    //     </a>
                                    //  </li>   
                                )
                            })
                        }
                    </ul>
                ) : ''
            } */}
            <ul className="banner-list">
                <li className='active'>
                    <a href="http://">
                    <img src="/banners/banner-1.png" alt="" />
                    </a>
                </li>
            </ul>
            <ol className="indicator-list">
                <li className='active'/>
            </ol>
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