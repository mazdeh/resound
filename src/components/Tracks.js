import React, { Component } from 'react';

import Track from './Track';
import { playSong } from '../actions/player';
import styles from '../styles/PaperStyle';

export default class Tracks extends Component {
  render() {
    const { tracks, dispatch } = this.props;
    if (tracks) {
      return (
        <div style={styles.gridTile}>
          {
            tracks.map((track, key) => {
              return <Track key={key} track={track} dispatch={dispatch} />;
            })
          }
        </div>
      )
    } else {
      return <div>too late</div>
    }
  }
}
