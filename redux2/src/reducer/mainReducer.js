import {combineReducers} from 'redux';
import article from './articleReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer;