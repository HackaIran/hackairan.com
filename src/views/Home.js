import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../stylesheets/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login">Go to login</Link>
      </div>
    );
  }
}

export default Home;
