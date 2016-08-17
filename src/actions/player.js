import * as types from '../constants/actionTypes';
import { CLIENT_ID } from '../constants/auth';

function setPlaying(player) {
    return {
        type: types.PLAYING_SET,
        player
    };
};

export function playSong(id) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID });

    const url = '/tracks/' + id;
    SC.stream(url)
      .then(function(player) {
      console.log('monna play: ', player);
      player.play();
      dispatch(setPlaying(player))
    });
  }
}
