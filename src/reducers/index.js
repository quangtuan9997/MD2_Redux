import {combineReducers} from 'redux';
import count from './count'
import list from './list';
export const reducers=combineReducers({count,list});