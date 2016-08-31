import React, { Component } from 'react';
import { Link } from 'react-router';

import { getPlayer, toggleIsPlaying, setPlayingTrack } from '../actions/player.js';
import styles from '../styles/PaperStyle';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';


export default class Track extends Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack(e) {
    e.preventDefault();
    const { track, dispatch } = this.props;
    dispatch(setPlayingTrack(track));
    dispatch(getPlayer(track))
    dispatch(toggleIsPlaying(true));
  }

  render() {
    const { track } = this.props;
    return (
      <Paper style={styles.paper}>
      {
        track.artwork_url ?
        <img onClick={this.playTrack} src={track.artwork_url} /> :
        <span onClick={this.playTrack} style={styles.placeholder}><FontIcon
          style={styles.placeholderIcon}
          className="material-icons">
            headset
        </FontIcon></span>
      }
        <div style={styles.header}>
          <div>{track.title}</div>

          <div style={styles.info}>
            <span>{track.user.username}</span>
            <span>
              <FontIcon
                style={styles.icons}
                className="material-icons">
                  mode_comment
              </FontIcon>
              {track.comment_count}
            </span>
            <span>
              <FontIcon
                style={styles.icons}
                className="material-icons">
                  favorite
              </FontIcon>
              {track.favoritings_count}
            </span>
          </div>

        </div>
      </Paper>
    );
  }
}
