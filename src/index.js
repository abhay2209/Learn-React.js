import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './counters';
//The above files can be imported  urself
ReactDOM.render(< Counters />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//const element=<h1>Hello World</h1>
//console.log(element);
//This is how u display in the DOM, ( what u wanna display, where)
//will have a tree pf components here.
//ReactDOM.render(element, document.getElementById('root'))
