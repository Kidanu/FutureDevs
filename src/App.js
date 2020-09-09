import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Projects from './Projects/Projects';
import AboutUs from './AboutUs/AboutUs';
import Meny from './Components/Meny';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Meny />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
