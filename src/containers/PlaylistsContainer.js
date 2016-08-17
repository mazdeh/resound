import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

import PlaylistContent from '../components/PlaylistContent';

class PlaylistsContainer extends Component {

  render() {
    const { auth } = this.props;
    const { authed, playlists } = this.props.auth;
    if (authed) {
      return (
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>My Playlists</Modal.Title>
            </Modal.Header>

          <Modal.Body>
          {
            playlists.map((playlist, key) => {
              const linkTo = "playlists/" + playlist.id;
              return (
                <Button bsStyle="link" key={key}>
                  <Link to={linkTo} activeStyle={{ color: 'red' }}>{playlist.title}</Link>
                </Button>
              )
            })
          }
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="info">
              <Link to="/">Close</Link>
            </Button>
          </Modal.Footer>

          </Modal.Dialog>
        </div>
        )
    } else {
      return <div>You need to log in to see your playlists! Please Log in.</div>
    }
  }
}

function mapStateToProps(state) {
  const { auth, routing } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps)(PlaylistsContainer);
