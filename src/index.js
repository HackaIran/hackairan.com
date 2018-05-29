import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header'
import Home from './views/Home'
import Login from './views/Login'

import './stylesheets/index.css';

class App extends Component {

    render() {
      return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact={ true } path="/" component={Home} />
                <Route exact={ true } path="/login" component={Login} />
            </div>
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
