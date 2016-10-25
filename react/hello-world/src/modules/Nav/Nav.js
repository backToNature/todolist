import React, { Component } from 'react';
import {Link} from 'react-router';

// import './App.css';

// var NavPanel = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '123123',
//       lastGistUrl: ''
//     };
//   },

//   componentDidMount: function() {
//     var that = this;
//     this.serverRequest = window.setTimeout(function () {
//         that.setState({
//             username: '3245',
//             lastGistUrl: '599999'
//         });
//     }, 200);
//   },

//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },

//   render: function() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });


class Nav extends Component {
  render() {
    return (
        <div className="Nav">
              <ul role="nav">
                  <li><Link to="/moduleA">moduleA</Link></li>
                  <li><Link to="/moduleB">moduleB</Link></li>
                  <li><Link to="/moduleC">moduleC</Link></li>
              </ul>
        </div>
    );
  }
}

export default Nav;