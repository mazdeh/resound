import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';

import { toggleIsPlaying } from '../actions/player';

export default class PlayerNav extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const { isPlaying, SCplayer, dispatch } = this.props;
    if (isPlaying) {
      SCplayer.pause();
      console.log(SCplayer.currentTime());
      dispatch(toggleIsPlaying(false));
    } else {
      SCplayer.play();
      dispatch(toggleIsPlaying(true));
    }
  }


  render () {
    const { isPlaying, SCplayer, playingTrack } = this.props;
    return (
      <Navbar fixedBottom>
        <Navbar.Header>
          <img className="player-img" src={playingTrack.artwork_url} />
        </Navbar.Header>
        <Nav>
          <NavItem>
            {playingTrack.title}
          </NavItem>
          <NavItem onClick={this.togglePlay}>
          {
            isPlaying ? <Glyphicon glyph="pause" /> : <Glyphicon glyph="play" />
          }
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
