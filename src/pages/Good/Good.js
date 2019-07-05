import React, {Component} from 'react'

import Header from '../../components/Header/Header';

import Tabbar from '../..//components/Tabbar/Tabbar';

export default class Good extends Component {
    render(){
        return(
            <div>
                <Header name="点赞" />
                <Tabbar tab={3}/>
            </div>
        )
    }
}