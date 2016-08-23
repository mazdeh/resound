import * as types from '../constants/actionTypes';

const initialState = {
  player: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.PLAYING_SET:
            return setPlaying(state, action)
    }
    return state;
};

function setPlaying(state, action) {
    const { player } = action;
    return Object.assign({}, state, {
      player: player
    })
}
