import React, { Component } from 'react';

import Track from './Track';
import { playSong } from '../actions/player';

const styles = {
  gridTile: {
    display: 'flex',
    width: '100%'
  }
}

export default class Tracks extends Component {
  render() {
    const { tracks, dispatch } = this.props;
    return (
      <div style={styles.gridTile}>
        {
          tracks.map((track, key) => {
            return <Track key={key} track={track} dispatch={dispatch} />;
          })
        }
      </div>
    )
  }
}
