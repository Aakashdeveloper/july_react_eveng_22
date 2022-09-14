import {combineReducers} from 'redux';
import films from './moviesReducer';

//declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;