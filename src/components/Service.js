import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Service extends Component {

    render () {
        const { title, description, link } = this.props.data;
        const rtl = this.props.rtl;
        return (<section className={rtl ? 'rtl' : ''}>
            <h2>{ title }</h2>
            <p>{ description }</p>
            <div><Link to={link}>More</Link></div>
        </section>)
    }
    
}