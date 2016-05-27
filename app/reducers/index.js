import {combineReducers} from 'redux';
// import reducers
import list from './list';
import image from './main';
import web from './web';

const rootReducer = combineReducers({
    list, image, web
});

export default rootReducer;
