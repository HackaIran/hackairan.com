import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Products from '../components/Products';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default Home;
