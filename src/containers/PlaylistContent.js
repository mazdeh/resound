import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tracks from '../components/Tracks';

class PlaylistContent extends Component {

  render() {
    const { playlist, dispatch } = this.props;
    return (
      <div>
        <h1>{playlist.title}</h1>
        <hr></hr>
        <Tracks tracks={playlist.tracks} {...this.props} />;
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { playlists } = state.auth;
  var { pathname } = state.routing.locationBeforeTransitions;
  pathname = pathname.split('/');
  const playlistId = pathname[pathname.length-1];

  const playlist = playlists.find(function(playlist) {
    return playlist.id == playlistId
  })

  return {
    playlist
  }
}

export default connect(mapStateToProps)(PlaylistContent);
