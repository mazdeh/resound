import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import player from './player';
import auth from './auth';

export default combineReducers({
    auth,
    player,
    routing: routerReducer
});
