import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';

import App from './containers/App';
import PlaylistsContainer from './containers/PlaylistsContainer';
import LikesContainer from './containers/LikesContainer';
import FollowingsContainer from './containers/FollowingsContainer';
import PlaylistContent from './containers/PlaylistContent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Callback from './components/Callback';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="me" component={App} >
        <Route path="playlists" component={PlaylistsContainer} />
        <Route path="playlists/:id" component={PlaylistContent} />
        <Route path="likes" component={LikesContainer} />
        <Route path="followings" component={FollowingsContainer} />
      </Route>

      <Route path="/callback" component={Callback} />
    </Router>
  </Provider>
  </MuiThemeProvider>,
    document.getElementById('app')
);
