import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { statsReducer } from './statsReducer';


const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
});

export default rootReducer;
