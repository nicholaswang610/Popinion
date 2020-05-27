import authReducer from './authReducer.js';
import projectReducer from './projectReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;