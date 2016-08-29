import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { ProgressBar, Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

import { setCurrentTime, toggleIsPlaying } from '../actions/player';

const styles = {
  PlayerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 90,
    padding: 16,
    zIndex: 100,
    zDepth: 100
  },
  TrackInfo: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start'
  },
  TrackAvatar: {
  },
  TrackTitle: {
    marginLeft: 20
  },
  PlayButton: {
    alignSelf: 'center'
  },
  icon: {
    fontSize: 48
  }
}

export default class PlayerNav extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      currentTime: 0
    }
  }

  // componentWillReceiveProps(props) {
  //   const { SCplayer } = props;
  //   SCplayer.on('time', () => {
  //     const now = SCplayer.currentTime() / SCplayer.options.duration * 100;
  //     this.setState({
  //       currentTime: now
  //     })
  //   })
  // }

  // {/*<Navbar fixedBottom>
  //   <ProgressBar now={this.state.currentTime} />
  //   <Navbar.Header>
  //     <img className="player-img" src={playingTrack.artwork_url} />
  //     {playingTrack.title}
  //   </Navbar.Header>
  //   <Nav>
  //   <NavItem onClick={this.togglePlay}>
  //     {
  //       isPlaying ? <Glyphicon glyph="pause" /> : <Glyphicon glyph="play" />
  //     }
  //   </NavItem>
  //   </Nav>
  // </Navbar>*/}

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
      <Paper style={styles.PlayerContainer}>
        {/*<span style={styles.PlayerInfo}>*/}
          <span style={styles.TrackInfo}>
            <Avatar style={styles.TrackAvatar} src={playingTrack.artwork_url} size={60} />
            <span style={styles.TrackTitle}>{playingTrack.title}</span>
          </span>
          <FloatingActionButton style={styles.PlayButton} onClick={this.togglePlay}>
            {
              isPlaying ? <FontIcon style={styles.icon} className="material-icons">pause</FontIcon> :
              <FontIcon style={styles.icon} className="material-icons">play_arrow</FontIcon>
            }

          </FloatingActionButton>
        {/*</span>*/}
      </Paper>
    );
  }
}
