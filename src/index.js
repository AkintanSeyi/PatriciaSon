import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {createStore , applyMiddleware , compose} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import { Provider } from 'react-redux';


import App from './App';

const store = createStore(  reducer , compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Provider  store = {store}  >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

