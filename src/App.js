import React from 'react';
import Meny from './Components/Meny';
import LetterAvatars from './Components/Avatars'
import './App.css';


class App extends React.Component{
  render() {
    return (
      <div>
        <Meny/>
        <LetterAvatars/>
      </div>
      
      
    );
  }
}

export default App;

