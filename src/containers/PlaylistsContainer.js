import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { getPlaylists } from '../actions/auth';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import styles from '../styles/NavContainer'

class PlaylistsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  goToPlaylist(playlist) {
    this.handleRequestClose();
    browserHistory.push('/me/playlists/' + playlist.id)
  }

  render() {
    const { playlists } = this.props;
    return (
      <span>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Playlists"
          style={styles.buttons}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
          {
            playlists.map((playlist, key) => {
              const boundGoToPlaylist = this.goToPlaylist.bind(this, playlist)
              return (
                <MenuItem
                  key={key}
                  onTouchTap={boundGoToPlaylist}
                  primaryText={playlist.title}
                  >
                </MenuItem>
              )
            })
          }
          </Menu>
        </Popover>
      </span>
    );
  }
}

function mapStateToProps(state) {
  const { playlists } = state.auth;
  return {
    playlists
  }
}

export default connect(mapStateToProps)(PlaylistsContainer);
