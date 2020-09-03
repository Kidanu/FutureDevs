import React from 'react';
import Meny from './Components/Meny';
import Routes from './Routes';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Meny />
        <Routes />
      </div>
    );
  }
}

export default App;

