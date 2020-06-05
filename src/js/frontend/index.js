import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import '../../style/index.css';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {CookiesProvider} from 'react-cookie';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
     document.getElementById('root')
);