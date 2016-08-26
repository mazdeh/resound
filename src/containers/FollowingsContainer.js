import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Row, Col } from 'react-bootstrap';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  gridTile: {
    display: 'flex',
    width: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5em',
    flex: 1
  }
}

class FollowingsContainer extends Component {
  render() {
    const { followings } = this.props;
    return (
      <div style={styles.gridTile}>
        {
          followings.map((following, key) => {
            return (
              <Card
                key={key}
                style={styles.card}
                >
                <CardHeader
                  title={following.username} >
                </CardHeader>
                <CardMedia>
                  <img src={following.avatar_url} />
                </CardMedia>
              </Card>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { followings } = state.auth;
  return {
    followings
  }
}

export default connect(mapStateToProps)(FollowingsContainer);
