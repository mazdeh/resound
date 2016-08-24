import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerNav from '../components/PlayerNav';

class PlayerContainer extends Component {
  render() {
    const { playingTrack } = this.props;
    if (playingTrack) return <PlayerNav {...this.props} />;
    return null;
  }
}

function mapStateToProps(state) {
  const { player } = state;
  const { SCplayer, isPlaying, playingTrack } = player;
  return {
    isPlaying,
    playingTrack,
    SCplayer
  }
}

export default connect(mapStateToProps)(PlayerContainer);
