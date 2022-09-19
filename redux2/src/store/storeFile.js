import {createStore, applyMiddleware} from 'redux';
import promiseMiddelware from 'redux-promise';
import reducer from '../reducer/mainReducer';

let store = createStore(reducer, applyMiddleware(promiseMiddelware));

export default store;