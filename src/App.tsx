import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import packageJSON from '../package.json';

export default class App extends Component {
  render() {
    console.debug(`Patryk Adamczyk Portfolio v${packageJSON.version}`);
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}
