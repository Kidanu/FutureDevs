import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Meny from './Components/Meny';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Meny history={history} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    );
  }
}
