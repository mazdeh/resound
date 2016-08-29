import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridList from 'material-ui/GridList';

import NavContainer from './NavContainer';
import PlayerContainer from './PlayerContainer';

const styles = {
  flexContainer: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

class App extends Component {
    render() {
        return (
          <div>
          <NavContainer />
              <div style={styles.flexContainer}>
                {this.props.children}
              </div>
          <PlayerContainer />
          </div>
        )
    }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
