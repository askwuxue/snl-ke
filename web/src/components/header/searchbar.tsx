import React, { useState, useEffect } from 'react';
import { appData } from '../../models/app';
import { SearchData, getSearchData } from '../../models/search';

export default function SearchBar() {
    const [ searchData, setSearchData ] = useState<SearchData | undefined>(appData?.searchData);
    useEffect(() => {
        if (!searchData) {
            getSearchData().then(data => {
                // console.log(data.result);
                setSearchData(data);
            })
        }
    }, [searchData])

    return (
        <div className="searchbar">
        <div className="search">
        <i className="type">课程</i>
        <input className="keyword" type="text" placeholder="搜索课程" />
        <div className="btn">
            <i className="icon icon-search-w" />
        </div>
        </div>
        <div className="list">
        <div className="title">热门搜索</div>
        <ul>
            {/* <li>ps</li>
            <li>高等数学</li>
            <li>吉他</li>
            <li>mybatis</li>
            <li>英语四级</li> */}
            {
                searchData ? (
                    searchData.result.map((data, index) => 
                        <li key={index}>{data}</li> 
                    )
                ) : ''
            }

        </ul>
        </div>
    </div>
    )
}