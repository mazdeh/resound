import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';

import UserNav from '../components/UserNav';

class NavContainer extends Component {
  render() {
    return (
      <AppBar
        title="resound"
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
