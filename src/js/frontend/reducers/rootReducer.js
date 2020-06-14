import authReducer from './authReducer.js';
import postReducer from './postReducer.js';
import {combineReducers} from 'redux';
import preloadReducer from './preloadReducer.js';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    preload: preloadReducer
});



export default rootReducer;