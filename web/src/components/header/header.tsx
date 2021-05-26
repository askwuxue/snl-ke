import React, { useState, useEffect } from 'react';
import CategoryData, { getCategories } from '../../models/category';
import Category from './category';
import SearchBar from './searchbar';
import Users from './users';
interface Props {
    categories: CategoryData[];
}

export default function Header(props: Props) {
    const [categories, setCategories] = useState(props.categories);
    // TODO如果不存在props.categories，请求接口取数据
    useEffect(() => {
        if (!categories) {
            // model得到的是以Promise类型的数据
            getCategories().then(data => {
                setCategories(data);
            })
        }
    }, [categories])
    return (
        <div className="g-header">
            <div className="page">
                <div className="left">
                <Logo />
                {/* 首次渲染结果会是一个undefined */}
                {
                    categories ? (
                        <Category categories={categories}/>
                    ) : ''
                }
                <SearchBar />
                </div>
                <div className="right">
                <Links />
                <Users />
                </div>
            </div>
        </div>
    )
}

const Logo = function() {
    return (
        <a href="http://ke.qq.com/">
            <h1 className="logo">
            腾讯课堂
            </h1>
        </a>
    )
}

const Links = function() {
    return (
        <>
        <a className="btn" href="http://ke.qq.com/">入驻/合作</a>
        <a className="btn" href="http://ke.qq.com/">急速版</a>
        <a className="btn" href="http://ke.qq.com/">客户端</a>
        <a className="btn" href="http://ke.qq.com/">私信</a>
        </>
    )
}