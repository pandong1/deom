import React from 'react';
const style = {
    height:'50px',
    width: '100%',
    textAlign:'center',
    lineHeight:'50px',
    color:'while',
    backgroundColor:'red',
    position:'fixed',
    top: 0,
    zIndex:3,

}
class Header extends React.Component {
    data() {
        return           
    }
    //放在实例上面
    title = 'qwer'
    //setState
    //唯一有状态的数据
    state = {
        title: '微信'
    }
    //放在原型上面
    title2(){
        return '支付宝'
    }
    render() {
        return(
            <header style={style}>{this.props ? this.props.name : this.title2()}</header>
        )
    }
    componentDidMount() {
        // console.log(this)
    }
}
export default Header