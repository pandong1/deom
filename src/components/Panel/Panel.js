import React from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading'
import LoadMore from '../LoadMore/LoadMore'
import {connect} from 'react-redux';

import { Link,withRouter } from "react-router-dom";
class Panel extends React.Component {
    state = {
       news:[],
       page:1,
       LoadingStatus: 'show',
    }
    //封装
    filterNews(arr,searchInputText){ 
           return arr.filter((item)=>{
                if(item.title.indexOf(searchInputText)>-1){
                    return item
                }
            }).map((item,index)=>{
                return(
                     <Link to={{
                         pathname:"/detail",
                         search: `?id=${index}`,
                         hash:"#the-hash",
                         state:{fromDashbord: true}
                     }} key={index} className="weui-media-box weui-media-box_appmsg">
                        <div onClick={
                            this.showGallery.bind(this,item.author?item.author.avatar_url :'')
                        } className="weui-media-box__hd">
                            <img className="weui-media-box__thumb" src={item.author?item.author.avatar_url :''} alt="" />
                        </div>
                        <div className="weui-media-box__bd">
                            <h4 className="weui-media-box__title">{item.title}</h4>
                            <p className="weui-media-box__desc">{item.author?item.author.loginname:''}</p>
                        </div>
                    </Link>
                )
            })
        }        
        showGallery(imgUrl){
            this.props.dispatch({
                type: "TOGGLEGALLYEL",
                isShowGallery: true,
                imgUrl
            })
            console.log(imgUrl)
        }
    render() {
        return (
            <div style={{
                paddingBottom: '60px'
            }} className="weui-panel weui-panel_access">
            <div className="weui-panel__hd">图文组合列表</div>
            <div className="weui-panel__bd">
               {this.filterNews(this.state.news,this.props.searchInputText)}
            </div>
            <div style={{ 
                display:this.state.LoadingStatus==='show'||this.state.news.length >=30 ? 'none':'block'}
            } onClick = {
                this.loadMore.bind(this)
            } className="weui-panel__ft">
                <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                    <div className="weui-cell__bd">查看更多</div>
                    <span className="weui-cell__ft"></span>
                </a>    
            </div>
            <Loading status={this.state.LoadingStatus}/>
            <LoadMore status={this.state.LoadingStatus} limit={this.state.news.length}/>
        </div>
        )
    }
    componentWillMount(){
        this.loadMore();
    }
    async loadMore(){
        this.setState({
            LoadingStatus: 'show'
        })
        // if(sessionStorage.getItem(this.props.tab)){
        //    const news = JSON.parse(sessionStorage.getItem(this.props.tab))
        //     console.log(news);
        // }else{ 
            const news = (await axios.get('https://cnodejs.org/api/v1/topics',{
                params: {
                    page:this.state.page,
                    limit:10,
                    //频道
                    tab:this.props.tab
                }
            })).data.data
            sessionStorage.setItem(this.props.tab,JSON.stringify(news))
        
       
       
          await new Promise((resalve)=>{setTimeout(() =>{ resalve() },100 )})
        // console.log(news);
        this.setState({
            page:++this.state.page,
            news:[...this.state.news,...news],
            LoadingStatus: 'hide'
        })
    }
    componentDidMount(){
        console.log(this)
    }
}

//connect负责连接redux
//withRouter负责连接router
export default withRouter(connect((state)=>{
    return state
})(Panel))