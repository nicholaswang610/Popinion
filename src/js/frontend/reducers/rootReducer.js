import authReducer from './authReducer.js';
import reviewReducer from './reviewReducer.js';
import {combineReducers} from 'redux';
import preloadReducer from './preloadReducer.js';

const rootReducer = combineReducers({
    auth: authReducer,
    review: reviewReducer,
    preload: preloadReducer
});

export default rootReducer;