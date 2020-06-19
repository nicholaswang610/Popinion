import authReducer from './authReducer.js';
import postReducer from './postReducer.js';
import {combineReducers} from 'redux';
import preloadReducer from './preloadReducer.js';
import ratingReducer from './ratingReducer.js';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    preload: preloadReducer,
    ratings: ratingReducer
});



export default rootReducer;