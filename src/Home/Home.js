import React, { Component } from 'react';

import './Home.css';
import LetterAvatars from '../Components/LetterAvatars';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LetterAvatars />
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
      
        </div>
      </div>
    );
  }
}
