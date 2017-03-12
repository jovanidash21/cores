import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import namesReducer from './names';
import activeNameReducer from './activeName';

const reducers = combineReducers({
    routing: routerReducer,
    names: namesReducer,
    activeName: activeNameReducer
});

export default reducers;