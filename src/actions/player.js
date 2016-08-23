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
      .then((player) => {
        console.log('player: ', player);
        player.play((d) => {
          console.log('I was played: ', d);

        })
        dispatch(setPlaying(player))
    });

    // fetch(url, {
    //   mode: 'no-cors'
    // })
    //   .then((response) => response.JSON())
    //   .then((response) => {
    //     console.log('reponse: ', response);
    //   })
  }
}
