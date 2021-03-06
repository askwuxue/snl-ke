import React from 'react';
import Category from './category';
import SearchBar from './searchbar';
import Users from './users';
interface Props {
}

export default function Header(props: Props) {
    
    return (
        <div className="g-header">
            <div className="page">
                <div className="left">
                <Logo />
                <Category/>
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