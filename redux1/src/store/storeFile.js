import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

///we are connecting store to the reducer;
let store = createStore(reducer);

export default store
