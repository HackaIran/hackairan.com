import axios from 'axios'
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Event from './Event'

export default class Events extends Component {

    constructor (props) {
        super(props);
        this.state = {
            events: []
        };
        this.loadEvents();
    }

    loadEvents () {
        axios.get('/events').then(events => {
            this.setState({ events })
        })
    }

    get events () {
        const events = [];
        let rtl = false;
        for (let event of this.state.events) {
            rtl = !rtl;
            events.push(
                <Event data={{
                    title: event.title,
                    description: event.description,
                    link: event.link
                }} rtl={rtl} />
            )
        }
        return events;
    }

    render () {
        return (<section>
            <h2>We conduct events</h2>
            { this.events }
        </section>)
    }
    
}