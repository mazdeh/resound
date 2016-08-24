import React, { Component } from 'react';

import Track from './Track';
import { playSong } from '../actions/player';

export default class Tracks extends Component {
  render() {
    const { tracks, dispatch } = this.props;
    return (
      <div>
        {
          tracks.map((track, key) => {
            return <Track key={key} track={track} dispatch={dispatch} />;
          })
        }
      </div>
    )
  }
}
