import * as types from '../constants/actionTypes';
import { CLIENT_ID } from '../constants/auth';

function _setStreamUrl(url) {
  return {
    type: types.SET_STREAM_URL,
    url
  };
}

export function toggleIsPlaying(isPlaying) {
  return {
    type: types.TOGGLE_IS_PLAYING,
    isPlaying
  }
}

export function setPlayingTrack(playingTrack) {
  return {
    type: types.SET_PLAYING_TRACK,
    playingTrack
  }
}

export function getPlayer(track) {
  return function (dispatch) {
    const streamUrl = track.stream_url + '?client_id=' + CLIENT_ID;
    fetch(streamUrl)
      .then((response) => {
        dispatch(_setStreamUrl(response.url))
      })
  }
}
