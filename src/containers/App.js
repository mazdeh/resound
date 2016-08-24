import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavContainer from './NavContainer';
import PlayerContainer from './PlayerContainer';

class App extends Component {
    render() {
        return (
          <div>
            <NavContainer />
            <div className="container">
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
