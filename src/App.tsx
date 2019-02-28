import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import packageJSON from '../package.json';
import Index from './components/app/pages/Index';
import './styles/Theme.scss';
import './styles/App.scss';
// import '@fortawesome/fontawesome-free/all.min.css';
export default class App extends Component {
  render() {
    console.debug(`Patryk Adamczyk Portfolio v${packageJSON.version}`);
    return (
      <div className="App">
        <Index/>
      </div>
    );
  }
}
