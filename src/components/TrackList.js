import React, { Component } from 'react';

class TrackList extends Component {
  render() {
    const { tracks } = this.props;
    if (tracks.length !== 0) {
      return (
        <div>
          {
            tracks.map((track, key) => {
              return (
                <div key={key}>
                  <img src={track.artwork_url} />
                  <p>{track.title}</p>
                </div>
              );
            })
          }
        </div>
      )
    } else {
      return <div>No items found.</div>
    }
  }
}

export default TrackList;
