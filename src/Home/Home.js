import React, { Component } from 'react';

import './Home.css';
import LetterAvatars from '../Components/LetterAvatars';
import SpinningCube from '../Components/SpinningCube';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LetterAvatars />
        <div className="lander">
          <h1>Home page</h1>
          <SpinningCube />
        </div>
      </div>
    );
  }
}
