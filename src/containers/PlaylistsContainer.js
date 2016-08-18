import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

class PlaylistsContainer extends Component {

  render() {
    const { playlists } = this.props;
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>My Playlists</Modal.Title>
          </Modal.Header>

        <Modal.Body>
        {
          playlists.map((playlist, key) => {
            const linkTo = "/me/playlists/" + playlist.id;
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
  }
}

function mapStateToProps(state) {
  const { playlists } = state.auth;
  return {
    playlists
  }
}

export default connect(mapStateToProps)(PlaylistsContainer);
