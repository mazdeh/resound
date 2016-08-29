import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { loginUser, logoutUser, getPlaylists, getLikes, getFollowings } from '../actions/auth';
import PlaylistsContainer from '../containers/PlaylistsContainer';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles/MenuButtonStyle'

export default class UserNav extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.followings = this.followings.bind(this);
    this.likes = this.likes.bind(this);
  }

  followings(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { user } = this.props.auth;
    dispatch(getFollowings(user.id));
    browserHistory.push('/me/followings');
  }

  likes(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { user } = this.props.auth;
    dispatch(getLikes(user.id));
    browserHistory.push('/me/likes');
  }

  logout(e){
    e.preventDefault();
    const { dispatch } = this.props;
    browserHistory.push('/');
    dispatch(logoutUser());
  }

  login(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser());
  }

  render() {
    const { user, authed } = this.props.auth;
    if (authed) {
      return (
        <div>
          <FlatButton
            onClick={this.followings}
            label="Followings"
            rippleColor="white"
            style={styles.buttons}
          />
          <PlaylistsContainer />
          <FlatButton
            onClick={this.likes}
            label="Likes"
            rippleColor="white"
            style={styles.buttons}
          />

          <RaisedButton
            onClick={this.logout}
            label={user.username}
            labelPosition="before"
            icon={<img className="images" src={user.avatar_url} />}
            style={styles.buttons}
          />
        </div>
      )
    } else {
      return <RaisedButton style={styles.buttons} label="Login" onClick={this.login} />;
    }
  }
}

export default UserNav;
