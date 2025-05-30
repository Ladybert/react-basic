/* eslint-disable */
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from './redux/reducer/globalReducer';

// store
// const storeRedux = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={storeRedux}>
//     <Home />
//   </Provider>
// );
root.render(
    <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
