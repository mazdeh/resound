import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';

import App from './containers/App';
import PlaylistsContainer from './containers/PlaylistsContainer';
import LikesContainer from './containers/LikesContainer';
import FollowingsContainer from './containers/FollowingsContainer';
import PlaylistContent from './components/PlaylistContent';

import Callback from './components/Callback';
import About from './components/About';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="playlists" component={PlaylistsContainer} />
        <Route path="playlists/:id" component={PlaylistContent} />
        <Route path="likes" component={LikesContainer} />
        <Route path="followings" component={FollowingsContainer} />
      </Route>

      <Route path="/callback" component={Callback} />
    </Router>
  </Provider>,
    document.getElementById('app')
);
