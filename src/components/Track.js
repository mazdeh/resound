import React, { Component } from 'react';
import { Button, Well, Image, Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import { playSong } from '../actions/player.js';

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack(e) {
    e.preventDefault();
    const { track, dispatch } = this.props;
    const id = track.id;
    dispatch(playSong(id))
  }

  render() {
    const { track } = this.props;
    return (
      <Well>
        <Row>
          <Col xs={2}><img onClick={this.playTrack} src={track.artwork_url} /></Col>
          <Col xs={6}>
            {track.title}
            <br></br>
            <small>
                {track.user.username}
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
    );
  }
}
