import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tracks from '../components/Tracks';

class LikesContainer extends Component {
  render() {
    const { likes } = this.props;
    return <Tracks tracks={likes} {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { likes } = state.auth;
  return {
    likes
  }
}

export default connect(mapStateToProps)(LikesContainer);
