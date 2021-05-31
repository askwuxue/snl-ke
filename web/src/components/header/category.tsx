import React, { useState, useEffect } from 'react';
import CategoryData, { getCategories } from '../../models/category';
import { appData } from '../../models/app';

interface Props {
}
export default function Category(props: Props) {
    // 数据的来源可能是models前端开始渲染之后存在models中的,或者是window对象中,也就是后端渲染来的数据
    const [categories, setCategories] = useState<CategoryData[] | undefined>(appData?.categories);
    
    useEffect(() => {
        // TODO如果不存在props.categories，请求接口取数据
        if (!categories) {
            // models得到的是以Promise类型的数据
            getCategories().then(data => {
                setCategories(data);
            })
        }
    }, [categories]) 
    return (
        <div className="category">
            <div className="title-container">
            <i className="icon icon-menu" />
            <span>分类</span>
            </div>
            <div className="list-container">
            <ul className="list">
                {/* TODO 如果当前的categories是undefined，上面的骨架正常渲染，下面的内容不渲染 */}
                {
                    categories ? (
                        categories.map(category => {
                            return (
                                <li key={category.ID.toString()}>
                                <div className="content">
                                    <div className="title">{category.title}</div>
                                    <div className="sub-title">
                                        {
                                            category.items ? (
                                                <ul>
                                                    {
                                                        category.items.map(item => {
                                                            return (
                                                                <li key={item.ID.toString()}>{item.title}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            ) : ''
                                        }
                                    <ul>
                                    </ul>
                                    </div>
                                </div>
                                <div className="sub-list">
                                    
                                    {
                                        category.children ? (
                                            <ul className="sub-list-ul">
                                                {
                                                    category.children.map(children => {
                                                        return (
                                                            <li className="sub-list-li" key={children.ID.toString()}>
                                                                <div className="main">
                                                                {children.title}
                                                                </div>
                                                                <div className="list">
                                                                    {
                                                                        children.items ? (
                                                                            <ul>
                                                                                {
                                                                                    children.items.map(item => {
                                                                                        return (
                                                                                                <li key={item.ID.toString()}>{item.title}</li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        ) : ''
                                                                    }
                                                                </div>
                                                            </li>
                                                        )
                                                    })                                         
                                                }
                                            </ul>
                                        ) : ''
                                    }
                                </div>
                            </li>    
                            )
                        })
                    ) : <></>
                }
            </ul>
            </div>
        </div>
    )
}