import React, { Component } from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import NavContainer from './NavContainer';
import PlayerContainer from './PlayerContainer';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
          <div>
            <NavContainer />
            {this.props.children}
            <PlayerContainer />
          </div>
        )
    }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
