import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../views/Home'
import Contact from '../views/Contact'

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)

export default App