import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Projects from './Projects/Projects';
import Meny from './Components/Meny';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Meny />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
