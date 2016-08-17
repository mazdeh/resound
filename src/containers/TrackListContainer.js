import React from 'react';
import { connect } from 'react-redux';

// import { track } from '../actions/track';
import TrackList from '../components/TrackList';

function mapStateToProps(state) {
  const { tracks } = state;
  return {
    tracks
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     search: bindActionCreators(track, dispatch)
//   };
// }

export default connect(mapStateToProps)(TrackList);

// const x = (mapStateToProps) => ComposedComponent =>
//   class ConnectedComponent {
//     return <Comp=sed {...this.props} ...this.state
//   }
