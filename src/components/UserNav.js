import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Button, Image } from 'react-bootstrap';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { loginUser, logoutUser, getPlaylists, getLikes, getFollowings } from '../actions/auth';

const styles = {
  buttons: {
    marginLeft: 10,
    marginTop: 7
  }
}


export default class UserNav extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.playlists = this.playlists.bind(this);
    this.followings = this.followings.bind(this);
    this.likes = this.likes.bind(this);
  }

  playlists(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { user } = this.props.auth;
    dispatch(getPlaylists(user.id));
    browserHistory.push('/me/playlists');
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
          <FlatButton
            onClick={this.playlists}
            label="Playlists"
            rippleColor="white"
            style={styles.buttons}
          />
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
