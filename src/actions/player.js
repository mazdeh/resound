import * as types from '../constants/actionTypes';
import { CLIENT_ID } from '../constants/auth';

function setPlayer(player) {
    return {
        type: types.SET_PLAYER,
        player
    };
};

export function setCurrentTime(now) {
  return {
    type: types.SET_CURRENT_TIME,
    now
  }
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

export function getPlayer(id) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID });

    const url = '/tracks/' + id;
    SC.stream(url)
      .then((player, err) => {
        if (err) console.log(err);
        dispatch(setPlayer(player))
    });
  }
}
