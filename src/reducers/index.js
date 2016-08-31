import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import player from './player';
import auth from './auth';
import browse from './browse';

export default combineReducers({
    auth,
    player,
    browse,
    routing: routerReducer
});
