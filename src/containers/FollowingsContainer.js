import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Row, Col } from 'react-bootstrap';

class FollowingsContainer extends Component {
  render() {
    const { followings } = this.props;
    return (
      <div>
        {
          followings.map((following, key) => {
            return (
              <div key={key}>
                <Well>
                  <Row>
                    <Col sm={2}><img src={following.avatar_url} /></Col>
                    <Col sm={6}>{following.username}</Col>
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

function mapStateToProps(state) {
  const { followings } = state.auth;
  return {
    followings
  }
}

export default connect(mapStateToProps)(FollowingsContainer);
