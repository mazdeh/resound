import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProgressBar, Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';

import { setCurrentTime, toggleIsPlaying } from '../actions/player';

export default class PlayerNav extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      currentTime: 0
    }
  }

  componentWillReceiveProps(props) {
    const { SCplayer } = props;
    SCplayer.on('time', () => {
      const now = SCplayer.currentTime() / SCplayer.options.duration * 100;
      this.setState({
        currentTime: now
      })
    })
  }

  togglePlay() {
    const { isPlaying, SCplayer, currentTime, dispatch } = this.props;
    if (isPlaying) {
      SCplayer.pause();
      dispatch(toggleIsPlaying(false));
    } else {
      SCplayer.play();
      dispatch(toggleIsPlaying(true));
    }
  }

  render () {
    const { isPlaying, SCplayer, playingTrack } = this.props;
    return (
      <div>
      <Navbar fixedBottom>
        <ProgressBar now={this.state.currentTime} />
        <Navbar.Header>
          <img className="player-img" src={playingTrack.artwork_url} />
          {playingTrack.title}
        </Navbar.Header>
        <Nav>
        <NavItem onClick={this.togglePlay}>
          {
            isPlaying ? <Glyphicon glyph="pause" /> : <Glyphicon glyph="play" />
          }
        </NavItem>
        </Nav>
      </Navbar>
      </div>
    );
  }
}
