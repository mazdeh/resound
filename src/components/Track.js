import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Button, Well, Image, Row, Col, Glyphicon } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { GridTile } from 'material-ui/GridList';

import { getPlayer, toggleIsPlaying, setPlayingTrack } from '../actions/player.js';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    padding: '.5em',
    margin: 10
  }
}

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack(e) {
    e.preventDefault();
    const { track, dispatch } = this.props;
    // set track on state.player
    dispatch(setPlayingTrack(track));
    // get SCplayer from SC
    dispatch(getPlayer(track.id))
    dispatch(toggleIsPlaying(true));
  }

  render() {
    const { track } = this.props;
    return (
      <div style={styles.gridTile}>
      <Card style={styles.card}>
        <CardHeader
          title={track.title}
          subtitle={track.user.username}
        />

        <CardMedia onClick={this.playTrack} >
          <img src={track.artwork_url} />
        </CardMedia>

          {/*<Col xs={6}>
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
          </Col>*/}
      </Card>
      </div>
    );
  }
}
