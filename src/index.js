import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Seatch from './components/Seatch/Seatch';
import Panel from './components/Panel/Panel';
import Galley from './components/Galley/Galley';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Job from './pages/Job/Job'
import Ask from './pages/Ask/Ask'
import Good from './pages/Good/Good'



import './index.css';
import 'weui'
import Hoc from './components/Hoc/Hoc';
import store from './stores/store';

//从react-redux导出一个Previder组件，这个组件是用来在react激活reedux使用的
import { Provider } from 'react-redux';
console.log(store)
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// const data ={
//     title: 'Hello world',
//     bool:0,
//     obj:{
//         arr:['js','jsx'],
//     arr2:[
//         <li key='1'>js</li>,
//         <li key='2'>jsx</li>
//     ] 
//     }
   
// }

// const template = <div>{data.title}</div>

// const template2 = <div>React</div>

// const methods ={
//     vFor(){
//         return <ul>
//         {data.obj.arr.map((item,index)=>{
//             return<li key={index}>{item}</li>
//         })}
//     </ul>
//     }
// }

// console.log(template,template2)

 ReactDOM.render( 
    <Provider store={store}>
        <Router> 
            {/* {data.bool?template:template2}
            {data.obj.arr}
            <hr/>
            <ul>
                {data.obj.arr2}
            </ul>
            <hr/>
            <ul>
                {data.obj.arr.map((item,index)=>{
                    return<li key={index}>{item}</li>
                })}
            </ul>
            <hr/>
            {methods.vFor()}  */}
            {/* <Header />
            <Seatch/>
            <Panel/>
            <Galley/> */}
            <Route exact path="/" component={Home} />
            <Route path="/job" component={Job} />
            <Route path="/ask" component={Ask} />
            <Route path="/good" component={Good} />
            <Route path="/detail" component={Detail} />
            <Redirect to="/" />
        </Router>
     </Provider>, document.getElementById('root'));


// ReactDOM.render(<div>
//     Hello world
//     </div>, document.getElementById('root'));


// ReactDOM.render(
//     React.createElement('div',null,'hello worldlll'),
//     document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
