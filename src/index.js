import React from 'react';
import ReactDOM from 'react-dom';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Padre } from './components/07-tarea-memo/Padre';
//import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { CounterApp } from './components/CounterApp';
//import { CounterWithCustomHook } from './components/CounterWithCustomHook';



ReactDOM.render(
 <MainApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

