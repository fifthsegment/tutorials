import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import '@shopify/polaris/styles.css';

// console.log(createLogger);
// const loggerMiddleware = createLogger();
const store = createStore(allReducers, applyMiddleware(thunkMiddleware,createLogger.default()));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));