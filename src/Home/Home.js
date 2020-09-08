import React, { Component } from 'react';

import './Home.css';
import LetterAvatars from '../Components/LetterAvatars';
import TechLogos from '../Components/TechLogos';
export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <LetterAvatars />

        <div className="lander">
        </div>
        <TechLogos />
      </div>
    );
  }
}
