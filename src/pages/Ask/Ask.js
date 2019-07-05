import React, {Component} from 'react'
import Header from '../../components/Header/Header';
import Seatch from '../../components/Seatch/Seatch';
import Panel from '../../components/Panel/Panel';
import Galley from '../..//components/Galley/Galley';
import Tabbar from '../..//components/Tabbar/Tabbar';

export default class Ask extends Component {
    render(){
        return(
            <div>
                <Header name="提问"/>
                <Seatch/>
                <Panel tab="ask" />
                <Galley/>
                <Tabbar tab={1}/>
            </div>
        )
    }
}