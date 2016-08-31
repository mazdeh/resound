import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { search } from '../actions/search';
import Tracks from '../components/Tracks';

class LandingPageContainer extends Component {
  componentWillMount() {
    const { pathname, dispatch } = this.props;
    console.log('searchQuery: ', pathname);
    if (pathname == '/') {
      const query = 'persian'
      browserHistory.push('/' + query);
      dispatch(search(query));
    }
  }

  render() {
    const { tracks } = this.props;
    return <Tracks tracks={tracks} {...this.props} />
  }
}

function mapStateToProps(state) {
  const { pathname } = state.routing.locationBeforeTransitions;
  const { tracks } = state.browse;
  return {
    pathname,
    tracks
  }
}

export default connect(mapStateToProps)(LandingPageContainer);
