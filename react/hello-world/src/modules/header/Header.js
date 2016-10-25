import React, { Component } from 'react';
// import './App.css';

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '123123',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    var that = this;
    this.serverRequest = window.setTimeout(function () {
        that.setState({
            username: '3245',
            lastGistUrl: '599999'
        });
    }, 200);
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

class Header extends Component {
  render() {
    return <UserGist />;
  }
}

export default Header;