import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home.js';

//const Root = () => <h1>Hello World from React <Hello /></h1>;

let container = document.getElementById('app');
let component = <Home />;

ReactDOM.render(component, container);