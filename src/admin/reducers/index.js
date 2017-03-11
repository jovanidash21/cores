import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as fetchReducer } from 'react-redux-fetch';
import namesReducer from './names';
import activeNameReducer from './activeName';

const reducers = combineReducers({
    routing: routerReducer,
    repository: fetchReducer,
    names: namesReducer,
    activeName: activeNameReducer
});

export default reducers;