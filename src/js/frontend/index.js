import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import '../../style/index.css';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
     document.getElementById('root')
);