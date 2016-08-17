import * as types from '../constants/actionTypes';

const initialState = {
  authed: false,
  user: {},
  followings: [],
  likes: [],
  playlists: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.USER_SET:
            return setUser(state, action);
        case types.USER_RESET:
            return resetUser(state, action);
        case types.PLAYLISTS_SET:
            return setPlaylists(state, action);
        case types.LIKES_SET:
            return setLikes(state, action);
        case types.FOLLOWINGS_SET:
            return setFollowings(state, action);
    }
    return state;
}

function setUser(state, action) {
    const { user } = action;
    return Object.assign({}, state, {
      authed: true, user: user
    });
}

function resetUser(state, action) {
  return Object.assign({}, state, {
    authed: false, user: {}
  });
}

function setPlaylists(state, action) {
  const { playlists } = action;
  return Object.assign({}, state, {
    playlists: playlists
  })
}

function setLikes(state, action) {
  const { likes } = action;
  return Object.assign({}, state, {
    likes: likes
  })
}

function setFollowings(state, action) {
  const { followings } = action;
  return Object.assign({}, state, {
    followings: followings
  })
}
