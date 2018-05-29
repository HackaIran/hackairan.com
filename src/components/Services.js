import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Service from './Service'

export default class Services extends Component {

    constructor (props) {
        super(props);
        this.state = {
            services: []
        };
        this.loadServices();
    }

    loadServices () {
        axios.get('/services').then(services => {
            this.setState({ services })
        })
    }

    get services () {
        const services = [];
        let rtl = false;
        for (let service of this.state.services) {
            rtl = !rtl;
            services.push(
                <Service data={{
                    title: service.title,
                    description: service.description,
                    link: service.link
                }} rtl={rtl} />
            )
        }
        return services;
    }

    render () {
        return (<section>
            <h2>We provide services</h2>
            { this.services }
        </section>)
    }
    
}