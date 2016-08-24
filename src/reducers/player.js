import * as types from '../constants/actionTypes';

const initialState = {
  isPlaying: false,
  playingTrack: null,
  currentTime: null,
  SCplayer: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
      case types.SET_PLAYER:
        return setPlayer(state, action);
      case types.TOGGLE_IS_PLAYING:
        return Object.assign({}, state, {
          isPlaying: action.isPlaying
        })
      case types.SET_PLAYING_TRACK:
        return Object.assign({}, state, {
          playingTrack: action.playingTrack
        })
    }
    return state;
};

function setPlayer(state, action) {
  const { player } = action;
  // play the song
  player.play();


  return Object.assign({}, state, {
    SCplayer: player,
    currentTime: player.audioLogger.currentTime
  })
}
