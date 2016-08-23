import React, { Component } from 'react';

import Track from './Track';
import { playSong } from '../actions/player';

export default class Tracks extends Component {

  // constructor(props) {
  //   super(props);
  //   this.playTrack = this.playTrack.bind(this);
  // }
  //
  // getUser(e) {
  //   e.preventDefault();
  //   console.log('clicking on user');
  // }
  //
  // playTrack(track) {
  //   const trackId = track.id;
  //   const { dispatch } = this.props;
  //   dispatch(playSong(trackId));
  // }

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
