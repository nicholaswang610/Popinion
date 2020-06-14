import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import '../../style/index.css';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
    ,
     document.getElementById('root')
);