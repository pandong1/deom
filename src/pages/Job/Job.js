import React, {Component} from 'react'

import Header from '../../components/Header/Header';
import Tabbar from '../..//components/Tabbar/Tabbar';

export default class Job extends Component {
    render(){
        return(
            <div>
                <Header name="???"/>
                <Tabbar tab={2}/>
            </div>
        )
    }
}