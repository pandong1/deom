import React from 'react';
import {connect} from 'react-redux';

class Galley extends React.Component {

    state = {
        imgUrl:'./images/pic_article.png'
    }
    render() {
        return(
            <div className="weui-gallery" style={{
                display: this.props.isShowGallery?'block':'none'
            }}>
            <span className="weui-gallery__img" style={{
                backgroundImage: `url(${this.props.imgUrl})`
            }}></span>
            <div onClick= {
                this.hideGallery.bind(this)
            } 
            className="weui-gallery__opr">
                <a href="javascript:" className="weui-gallery__del">
                    <i className="weui-icon-delete weui-icon_gallery-delete"></i>
                </a>
            </div>
        </div>
        )
    }
    hideGallery(){
        this.props.dispatch({
            type: "TOGGLEGALLYEL",
            isShowGallery: false,
            imgUrl:''
        })
    }
    componentDidMount(){
        console.log(this)
    }
}
export default connect((state)=>{
    return state
})(Galley)