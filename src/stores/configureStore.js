import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers/index';

const router = routerMiddleware(browserHistory);

// middleware does things between the time we dispatch something
// and when it reaches the store
const initialState = {}

export default function configureStore(initialState) {
    // adding Redux Chrome dev tools support
    const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk, router),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}
