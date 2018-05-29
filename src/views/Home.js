import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default Home;
