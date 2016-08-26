import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridList from 'material-ui/GridList';

import NavContainer from './NavContainer';
import PlayerContainer from './PlayerContainer';

const styles = {
  gridList: {
    display: 'flex',
    flexwrap: 'wrap',
    maxWidth: '60em'
  }
};

class App extends Component {
    render() {
        return (
          <div>
          <NavContainer />
              <div style={styles.gridList}>
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
