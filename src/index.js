import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import CounterApp from './CounterApp';
// import { PrimeraApp } from './PrimeraApp';


const divRoot = document.getElementById('root')

// ReactDOM.render(<PrimeraApp saludo='hi my name is eury' />, divRoot)
ReactDOM.render(<CounterApp value={10} />, divRoot);
