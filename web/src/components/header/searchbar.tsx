import React, { useState, useEffect } from 'react';
import { appData } from '../../models/app';
import { SearchData, getSearchData, getSuggest } from '../../models/search';

export default function SearchBar() {
    // 全站搜索热点词
    const [ searchData, setSearchData ] = useState<SearchData | undefined>(appData?.searchData);
    // 控制显示搜索结果
    const [ showInfo, setShowInfo ] = useState<boolean>(false);
    // 用户搜索keyWords
    const [ kw, setKw ] = useState<string>();
    // 用户搜索
    const [ suggest, setSuggest ] = useState<SearchData | undefined>();
    // 搜索结果来源，默认来源为全站的搜索热点。默认为false
    const [origin, setOrigin ] = useState(false);

    // 全站搜索
    useEffect(() => {
        if (!searchData) {
            getSearchData().then(data => {
                setSearchData(data);
            })
        }
    }, [searchData]);

    // 用户检索
    useEffect(() => {
        // 关键字没有
        if (!kw) {
            setSuggest(undefined);
            setOrigin(false);
        // 关键字发生变化
        } else {
            getSuggest(kw).then(data => {
                setSuggest(data);
            })
            // 搜索来源为用户搜索
            setOrigin(true);
        }
    }, [kw])

    return (
        <div className="searchbar">
        <div className="search">
        <i className="type">课程</i>
        <input 
        className="keyword" type="text" placeholder="搜索课程"
        onFocus={() => setShowInfo(true)}
        onBlur={() => setShowInfo(false)}
        onInput={e => setKw((e.target as HTMLInputElement).value)}
        />
        <div className="btn">
            <i className="icon icon-search-w" />
        </div>
        </div>
        {/* 搜索结果展示 */}
        <ShowInfo showInfo={showInfo} origin={origin} data={suggest || searchData}/>
    </div>
    )
}

interface Props {
    showInfo: boolean,
    origin: boolean,
    data: SearchData | undefined
}

// 显示搜索结果，包括全站最热和用户搜索的结果两部分
function ShowInfo(props: Props) {
    const { origin, data } = props;
    // 如果有焦点且有返回结果且返回结果的数组长度大于0，才渲染显示框
    let showInfo = (props.showInfo && data?.result && data.result.length > 0) ? true : false;
    return(
        <div className="list" style={{display: showInfo ? 'block' : 'none'}}>
            {/* 如果是用户搜索结果，不渲染热门搜索div */}
            <div className="title" style={{display: origin ? 'none' : 'block'}}>热门搜索</div>
            <ul>
                {
                    props.data ? (
                        props.data.result.map((data, index) => 
                            <li key={index}>{data}</li> 
                        )
                    ) : ''
                }
            </ul>
        </div>
    )
}