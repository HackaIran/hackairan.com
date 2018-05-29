import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Events from './Events';
import Services from './Services';

export default class Products extends Component {

    render () {
        return (<main>
            <Events />
            <Services />
        </main>)
    }
    
}