import * as types from '../constants/actionTypes';
import { CLIENT_ID } from '../constants/auth';

function _setBrowseTracks(tracks) {
  return {
    type: types.SET_BROWSE_TRACKS,
    tracks
  }
}

export function search(query) {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID })

    SC.get('/tracks', {
      title: query
    }).then((tracks) => {
      dispatch(_setBrowseTracks(tracks));
    })
  }
}
