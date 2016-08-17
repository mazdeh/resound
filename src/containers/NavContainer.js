import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import UserNav from '../components/UserNav';
import Search from '../components/Search';

class NavContainer extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Glyphicon glyph="equalizer" /> SoundCloud</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <UserNav {...this.props} />
            </NavItem>
          </Nav>
          {/*<Nav>
            <NavItem>
              <Search dispatch={this.props.dispatch} />
            </NavItem>
          </Nav>*/}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  const { auth, playlists } = state;
  return {
    auth,
    playlists
  }
}

export default connect(mapStateToProps)(NavContainer);
