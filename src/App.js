import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js'
import UserProfile from './components/userProfile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Mastermind</h1>
      <NavBar />
      <UserProfile />
      </div>
    );
  }
}

export default App;
