import React from 'react';
import { Link } from "react-router-dom";

class Tabbar extends React.Component {
    //badge: <0 都不出
    //badge： 0 出圆点
    //badge: >0 出数字
    state = {
        tabs: [{
                title: '分享',
                name: 'share',
                url: '/',
                badge: 8
            },
            {
                title: '提问',
                name: 'ask',
                url: '/ask',
                badge: -1
            },
            {
                title: '求职',
                name: 'job',
                url: '/job',
                badge: 0
            },
            {
                title: '点赞',
                name: 'good',
                url: '/good',
                badge: -1
            }
        ]
    }

    render() {
        return ( 
            <div style = {{
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
            className = "weui-tabbar"> 
                {
                    this.state.tabs.map((item,index) => {
                        return ( 
                            <Link to={{
                                pathname: item.url
                            }} key={index} className = {
                                index===this.props.tab?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"
                            }>
                                <span style = {{
                                    display: 'inline-block',
                                    position: 'relative',
                                }}>
                                    <img src="./images/icon_tabbar.png"alt = ""className = "weui-tabbar__icon" /> 
                                    {/* 圆点加数字 */}
                                    {
                                        item.badge>0?(
                                             <span className = "weui-badge" style = {{
                                        position: 'absolute',
                                        top: '-2px',
                                        right: '-13px',
                                    }}>{item.badge}</span> 
                                        ):''
                                    }
                                   
                                    {/* 圆点 */}
                                    {
                                        item.badge===0?(
                                            <span className = "weui-badge weui-badge_dot" style = {{
                                                position: 'absolute',
                                                top: 0,
                                                right: '-6px',
                                            }}>
                                    </span>
                                        ):''
                                    } 
                                </span >
                                <p className = "weui-tabbar__label" >{item.title}</p>
                            </Link>
                        )
                    })
                }
        </div>
        )
    }
}
export default Tabbar