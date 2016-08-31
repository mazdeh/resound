import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { CLIENT_ID } from '../constants/auth';
import { setCurrentTime, toggleIsPlaying } from '../actions/player';

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
  PlayerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 76
  },
  TrackInfo: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignSelf: 'flex-start',
    padding: 10,
    width: '45%'
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
  },
  ProgressBar: {
    position: 'fixed',
    left: 0,
    bottom: 76
  }
}

export default class PlayerNav extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.state = {
      completed: 0
    }
  }

  componentDidMount() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    audioElement.addEventListener('timeupdate', this.handleProgress);
    audioElement.play();
  }

  componentDidUpdate(prevProps) {
    const { streamUrl } = this.props;
    if (streamUrl === prevProps.streamUrl) {
      return;
    }
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    audioElement.play();
  }

  handleProgress(e) {
    this.setState({
      completed: e.target.currentTime / e.target.duration * 100
    })
  }

  togglePlay() {
    const { isPlaying, dispatch } = this.props;
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    if (isPlaying) {
      audioElement.pause();
      dispatch(toggleIsPlaying(false));
    } else {
      audioElement.play();
      dispatch(toggleIsPlaying(true));
    }
  }

  render () {
    const { isPlaying, playingTrack, streamUrl } = this.props;
    return (
      <span>
        <audio ref="audio" src={streamUrl}></audio>
        <LinearProgress style={styles.ProgressBar} mode="determinate" value={this.state.completed} />
        <Paper style={styles.PlayerContainer} >
          <span style={styles.TrackInfo}>
            <Avatar style={styles.TrackAvatar} src={playingTrack.artwork_url} size={50} />
            <span style={styles.TrackTitle}>{playingTrack.title}</span>
          </span>
          <FloatingActionButton onClick={this.togglePlay} mini={true} style={styles.PlayButton}>
            {
              isPlaying ? <FontIcon style={styles.icon} className="material-icons">pause</FontIcon> :
              <FontIcon style={styles.icon} className="material-icons">play_arrow</FontIcon>
            }

          </FloatingActionButton>
        </Paper>
      </span>
    );
  }
}
