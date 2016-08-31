import * as types from '../constants/actionTypes';

const initialState = {
  tracks: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_BROWSE_TRACKS:
      return Object.assign({}, state, {
        tracks: action.tracks
      })
  }
  return state;
}
