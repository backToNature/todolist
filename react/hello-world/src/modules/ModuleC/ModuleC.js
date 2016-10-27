import React, { Component } from 'react';
import Nav from '../Nav/Nav';
// import './App.css';


var Panel = React.createClass({
  getInitialState: function() {
    return {
      username: 'guohao',
      lastGistUrl: 'a'
    };
  },

  componentDidMount: function() {
    var that = this;
    this.serverRequest = window.setTimeout(function () {
        
        that.setState({
            username: 'haoge',
            lastGistUrl: 'BBBBBBB'
        });
    }, 2000);
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.username}
        {this.state.lastGistUrl}
      </div>
    );
  }
});

class ModuleC extends Component {
  render() {
    return (
        <div className="ModuleC">
            <Nav />
            <Panel />
        </div>
    );
  }
}

export default ModuleC;