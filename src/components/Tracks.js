import React, { Component } from 'react';
import { Button, Well, Image, Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import { playSong } from '../actions/player';

export default class Tracks extends Component {

  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  getUser(e) {
    e.preventDefault();
    console.log('clicking on user');
  }

  playTrack(track) {
    const trackId = track.id;
    const { dispatch } = this.props;
    dispatch(playSong(trackId));
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        {
          tracks.map((track, key) => {
            const { user } = track;
            const userId = user.id;
            const userLink = '/users/' + userId;

            const boundPlayTrack = this.playTrack.bind(this, track);

            return (
              <div key={key}>
                <Well>
                  <Row>
                    <Col xs={2}><img onClick={boundPlayTrack} src={track.artwork_url} /></Col>
                    <Col xs={6}>
                      {track.title}
                      <br></br>
                      <small>
                          <Link onClick={this.getUser} to={userLink}>{track.user.username}</Link>
                      </small>
                      <Row>
                        <Col xs={3}>
                        <small>
                          {track.comment_count} <Glyphicon glyph="comment" />
                        </small>
                        </Col>
                        <Col xs={3}>
                          <small>
                            {track.favoritings_count} <Glyphicon glyph="heart" />
                          </small>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Well>
              </div>
            )
          })
        }
      </div>
    )
  }
}
