import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        window.setTimeout(opener.SC.connectCallback, 1);
    }

    render() {
        return <div>This page will close soon.</div>;
    }
}

export default Callback;
