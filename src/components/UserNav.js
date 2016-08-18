import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Button, Image } from 'react-bootstrap';

import { loginUser, logoutUser, getPlaylists, getLikes, getFollowings } from '../actions/auth';

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
  }

  followings(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { user } = this.props.auth;
    dispatch(getFollowings(user.id));
  }

  likes(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { user } = this.props.auth;
    dispatch(getLikes(user.id));
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
          <Button bsStyle="link" onClick={this.followings}>
            <Link to="/me/followings" activeStyle={{ color: 'red'}} >Followings</Link>
          </Button>
          <Button bsStyle="link" onClick={this.playlists}>
            <Link to="/me/playlists" activeStyle={{ color: 'red'}} >Playlists</Link>
          </Button>
          <Button bsStyle="link" onClick={this.likes}>
            <Link to="/me/likes" activeStyle={{ color: 'red' }}>Likes</Link>
          </Button>
          <Button bsStyle="link" onClick={this.logout}>
            <Link to="/">
            {user.username} <small>(logout)</small>
            </Link>
            <Image className="images" src={user.avatar_url} circle />
          </Button>
        </div>
      )
    } else {
      return <Button bsStyle="success" onClick={this.login}>Login</Button>;
    }
  }
}

export default UserNav;
