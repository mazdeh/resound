import { CLIENT_ID, REDIRECT_URI} from '../constants/auth';
import * as types from '../constants/actionTypes';

import { browserHistory } from 'react-router';

function _setUser(user) {
  return {
    type: types.USER_SET,
    user
  };
}

export function logoutUser() {
  return {
    type: types.USER_RESET
  }
}
function _setPlaylists(playlists) {
  return {
    type: types.PLAYLISTS_SET,
    playlists
  }
}

function _setLikes(likes) {
  return {
    type: types.LIKES_SET,
    likes
  }
}

function _setFollowings(followings) {
  return {
    type: types.FOLLOWINGS_SET,
    followings
  }
}

export function loginUser() {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });
    
    SC.connect().then((session) => {
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((user) => {
        browserHistory.push('/me/likes');
        dispatch(_setUser(user));
        dispatch(getLikes(user.id));
        dispatch(getPlaylists(user.id));
      });
    });
  };
}

export function getPlaylists(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/playlists';
    SC.get(fetchURL).then(function(playlists) {
      dispatch(_setPlaylists(playlists));
    })
  }
}

export function getLikes(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/favorites';
    SC.get(fetchURL).then(function(likes) {
      dispatch(_setLikes(likes));
    })
  }
}

export function getFollowings(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/followings';
    SC.get(fetchURL).then(function(followings) {
      dispatch(_setFollowings(followings.collection));
    })
  }
}
