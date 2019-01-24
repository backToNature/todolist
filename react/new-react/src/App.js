import React, { Component } from 'react';

const element = <h1>title</h1>;

export default class App extends Component {
    render() {
        return (
            element,
            <div>Hello React!</div>
        );
    }
}