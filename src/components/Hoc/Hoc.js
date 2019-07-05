import React from 'react';
import { connect } from 'react-redux'
class Hoc extends React.Component {
    state = {
        title:'qwer'
    }

    render() {

        return (
            <div> 
            </div>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}
//export default Hoc

//获取仓库里面的state
//把Hoc组件处理高阶组件，让它有读取数据库的能力
export default connect((state)=>{
    return state
})(Hoc)