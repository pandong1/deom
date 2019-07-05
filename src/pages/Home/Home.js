import React, {Component} from 'react'

import Header from '../../components/Header/Header';
import Seatch from '../../components/Seatch/Seatch';
import Panel from '../../components/Panel/Panel';
import Galley from '../..//components/Galley/Galley';
import Tabbar from '../..//components/Tabbar/Tabbar';

export default class Home extends Component {

    render(){
        return(
            <div>
                <Header name="分享"/>
                <Seatch/>
                <Panel tab="share" />
                <Galley/>
                <Tabbar tab={0}/>
            </div>
        )
    }
}