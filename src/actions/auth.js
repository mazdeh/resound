import { CLIENT_ID, REDIRECT_URI} from '../constants/auth';
import * as types from '../constants/actionTypes';

import { browserHistory } from 'react-router';

function setUser(user) {
  return {
    type: types.USER_SET,
    user
  };
}

function resetUser() {
  return {
    type: types.USER_RESET
  }
}

function setPlaylists(playlists) {
  return {
    type: types.PLAYLISTS_SET,
    playlists
  }
}

function setLikes(likes) {
  return {
    type: types.LIKES_SET,
    likes
  }
}

function setFollowings(followings) {
  return {
    type: types.FOLLOWINGS_SET,
    followings
  }
}

export function loginUser() {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

    // fetch() fetches the URL like a XMLHttpRequest
    // returns a promise that is resolved to `response`
    SC.connect().then((session) => {
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((user) => {
        browserHistory.push('/me/likes');
        dispatch(setUser(user));
        dispatch(getLikes(user.id));
      });
    });
  };
}

export function logoutUser() {
  return function (dispatch) {
    return dispatch(resetUser());
  }
}

export function getPlaylists(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/playlists';
    SC.get(fetchURL).then(function(playlists) {
      dispatch(setPlaylists(playlists));
    })
  }
}

export function getLikes(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/favorites';
    SC.get(fetchURL).then(function(likes) {
      dispatch(setLikes(likes));
    })
  }
}

export function getFollowings(userId) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    const fetchURL = '/users/' + userId + '/followings';
    SC.get(fetchURL).then(function(followings) {
      dispatch(setFollowings(followings.collection));
    })
  }
}
