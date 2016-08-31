import * as types from '../constants/actionTypes';

import { CLIENT_ID } from '../constants/auth';

const initialState = {
  isPlaying: false,
  playingTrack: null,
  streamUrl: null
};

export default function(state = initialState, action) {
    switch (action.type) {
      case types.TOGGLE_IS_PLAYING:
        return Object.assign({}, state, {
          isPlaying: action.isPlaying
        })
      case types.SET_CURRENT_TIME:
        return Object.assign({}, state, {
          currentTime: action.now
        })
      case types.SET_PLAYING_TRACK:
        return Object.assign({}, state, {
          playingTrack: action.playingTrack
        })
      case types.SET_STREAM_URL:
        return Object.assign({}, state, {
          streamUrl: action.url
        })
    }
    return state;
};
