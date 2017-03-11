import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { middleware as fetchMiddleware } from 'react-redux-fetch'
import reducers from '../reducers/index';

const store = createStore(
    reducers,
    applyMiddleware(logger(), thunk, promise(), fetchMiddleware)
);

export default store;