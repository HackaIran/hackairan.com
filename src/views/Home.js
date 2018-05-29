import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Events from '../components/Events';
import Services from '../components/Services';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Events />
        <Services />
        
      </div>
    );
  }
}

export default Home;
