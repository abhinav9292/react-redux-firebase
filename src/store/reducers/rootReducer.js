import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combinerReducers } from 'redux';


const rootReducer = combinerReducers({

    auth : authReducer,
    project : projectReducer

});

export default rootReducer;
