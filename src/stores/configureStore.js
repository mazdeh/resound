import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

// middleware does things between the time we dispatch something
// and when it reaches the store
const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);


const initialState = {}

export default function configureStore(initialState) {
    // reducer is also a middleware
    return createStoreWithMiddleware(rootReducer, initialState);
}
