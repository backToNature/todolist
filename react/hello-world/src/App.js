import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import logo from './logo.svg';
import './App.css';

import Header from './modules/header/Header';
import Nav from './modules/Nav/Nav';
import ModuleA from './modules/ModuleA/ModuleA';
import ModuleB from './modules/ModuleB/ModuleB';
import ModuleC from './modules/ModuleC/ModuleC';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={Nav}>
          </Route>
          <Route path="/ModuleA" component={ModuleA}/>
          <Route path="/ModuleB" component={ModuleB}/>
          <Route path="/ModuleC" component={ModuleC}/>
        </Router>
      </div>
    );
  }
}

export default App;
