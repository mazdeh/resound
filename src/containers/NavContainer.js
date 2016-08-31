import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserNav from '../components/UserNav';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import styles from '../styles/NavContainer';

import {fullWhite} from 'material-ui/styles/colors';

class NavContainer extends Component {
  render() {
    return (
      <AppBar
        title="resound"
        style={styles.AppBar}
        iconElementLeft={
          <FontIcon className="material-icons" style={styles.logo} color={fullWhite}>
            headset
          </FontIcon>}
        iconElementRight={<UserNav {...this.props} />}
        />
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps)(NavContainer);
