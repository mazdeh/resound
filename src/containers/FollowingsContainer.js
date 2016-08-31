import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import styles from '../styles/PaperStyle';

class FollowingsContainer extends Component {
  render() {
    const { followings } = this.props;
    return (
        <List>
        {
          followings.map((following, key) => {
            return (
                <ListItem
                  key={key}
                  leftAvatar={<Avatar src={following.avatar_url} />}
                >
                  {following.username}
                </ListItem>
            )
          })
        }
        </List>
    )
  }
}

function mapStateToProps(state) {
  const { followings } = state.auth;
  return {
    followings
  }
}

export default connect(mapStateToProps)(FollowingsContainer);
