import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProgressBar, Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';

import { setCurrentTime, toggleIsPlaying } from '../actions/player';

export default class PlayerNav extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillMount() {
    this.state = {
      currentTime: 0
    }
  }

  componentDidMount() {
    const now = Math.floor((SCplayer.currentTime() / SCplayer.options.duration) * 100);
    this.setState({
      currentTime: now
    })

    // dispatch(setCurrentTime(now));
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
    const { isPlaying, SCplayer, playingTrack, currentTime } = this.props;
    console.log('currentTime:', currentTime);
    return (
      <div>
      <ProgressBar now={currentTime} />
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
      </div>
    );
  }
}
