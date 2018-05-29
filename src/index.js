import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header'
import Home from './views/Home'

import './stylesheets/index.css';

class App extends Component {

    render() {
      return (
        <BrowserRouter>
            <div className="App">
                <Route exact={ true } path="/" component={Home} />
            </div>
        </BrowserRouter>
      );
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
