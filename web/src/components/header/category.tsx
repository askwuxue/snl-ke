import React from 'react';
import CategoryData from '../../models/category';
interface Props {
    categories: CategoryData[]
}
export default function Category(props: Props) {
    return (
        <div className="category">
            <div className="title-container">
            <i className="icon icon-menu" />
            <span>分类</span>
            </div>
            <div className="list-container">
            <ul className="list">
                {
                    props.categories.map(category => {
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
                }
            </ul>
            </div>
        </div>
    )
}