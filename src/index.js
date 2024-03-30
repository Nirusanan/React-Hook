import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContextHook from './UseContextHook/ContextHook';
import MemoHook from './MemoHook/MemoHook';
import Reducer from './ReducerHook/Reducer';
import UserForm from './ReducerHook/UserForm';
import RefHook from './RefHook/RefHook';
import Amount from './StateHook/Amount';
import Home from './UseCallback/Home';
import Type from './UseEffectHook/type';
import Basic from './UseEffectHook/basic';
import WindowSize from './UseEffectHook/windowSize';
import UI from './CustomHook/UI';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
