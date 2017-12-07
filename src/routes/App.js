import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from "../components/styles"

import Home from '../views/Home'
import Contact from '../views/Contact'

const App = () => (
    <Router>
        <Container>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </Container>
    </Router>
);

export default App