import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavContainer from './NavContainer';

class App extends Component {
    render() {
        return (
          <div>
            <NavContainer />
            <div className="container">
            {this.props.children}
            </div>
            {/*<PlayerNav />*/}
          </div>
        )
    }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
