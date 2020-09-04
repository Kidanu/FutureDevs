import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
          <form>
            <Button variant="btn btn-success" component={Link} to="/projects">
              Click button to view products
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
