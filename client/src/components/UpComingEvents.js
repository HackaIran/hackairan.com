import React from 'react'
import Radium from 'radium'
import Color from 'color'

import TimelineBar from './sub-components/TimelineBar'

class UpComingEvents extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedEvent: -1,
            waiting: true,
            events: [],
        };
    }

    componentDidMount () {
        this.fetchEvents();
    }

    fetchEvents () {
        const events = [
            {
                id: 0,
                title: 'MiniHacka 1',
                location: 'Payame Noor University',
                city: 'Karaj, Iran',
                dateLabel: 'Nov 26 - 05 Azar',
                timestamp: 1511708400000,
                description: 'MiniHacka is a smaller-sized Hacka event that is held for the purpose of preparation and networking for the original match.',
                registerLink: 'https://evand.com/events/minihackakaraj1'
            },
            {
                id: 1,
                title: 'Hacka{Karaj} 3',
                location: 'Pardis',
                city: 'Karaj, Iran',
                dateLabel: 'Feb 02 - 13 Bahman',
                timestamp: 1517567400000,
                description: 'In previous version of Hacka(in Karaj) the competitors observed some technical changes and the arrangements for Hacademy were made. In current version, another part of Hacka starts growing: Communication, the part which we created Hacka for.',
                registerLink: 'https://evand.com/hackakaraj'
            }
        ];
        events.sort((a, b) => a.timestamp < b.timestamp ? -1 : 1);
        let selectedEvent = events.length - 1;
        for (let event of events) if (event.timestamp >= Date.now()) {
            selectedEvent = event.id;
            break;
        }
        this.setState({ events: events, waiting: false, selectedEvent: selectedEvent });
    }

    get bars () {
        const bars = [];
        for (let event of this.state.events) {
            const id = event.id;
            bars.push(<TimelineBar
                key={id}
                onClick={() => this.selectEvent(id)}
                timestamp={event.timestamp}
                active={ this.state.selectedEvent === event.id }
            />)
        }
        return bars;
    }

    selectEvent (id) {
        if (id === this.state.selectedEvent) return;
        this.setState({ waiting: true });
        setTimeout(() => {
            this.setState({ selectedEvent: id, waiting: false })
        }, 500)
    }

    get eventList () {
        const items = [];
        for (let event of this.state.events) {

            if (event.timestamp < Date.now()) continue;

            const id = event.id;
            const titleClass = (id === this.state.selectedEvent) ? "upComingEvents__aside-event-list-item-title--selected" : null
            items.push(<li key={id} className="upComingEvents__aside-event-list-item" onClick={() => this.selectEvent(id)}>
                <h3 key={'title' + id} className={`upComingEvents__aside-event-list-item-title ${titleClass}`}>{ event.title }</h3>
                <h4 className="upComingEvents__aside-event-list-item-location">{ event.location } / <b>{ event.city }</b></h4>
                <time className="upComingEvents__aside-event-list-item-date">{ event.dateLabel }</time>
            </li>)
        }
        return items;
    }

    getEvent (id) {
        for (let event of this.state.events) if (event.id === id) return event;
        return {};
    }

    render() {
        const currentEvent = Object.assign({
                title: '-',
                location: '-',
                city: '-',
                timestamp: '-',
                description: '-',
                registerLink: '-',
            }, this.getEvent(this.state.selectedEvent));
        const additionalClassForSelectedEvent = this.state.waiting ? '.upComingEvents__selected-event--additions' : null;
        const eventIsActive = currentEvent.timestamp >= Date.now();
        const finalRegisterButtonClass = eventIsActive ? null : "upComingEvents__event-register--inActive";

        return (
            <div className="upComingEvents">
                <section className="upComingEvents__box">
                    <div className={`upComingEvents__selected-event ${additionalClassForSelectedEvent}`}>
                        <h2 className="upComingEvents__event-title">{ currentEvent.title } </h2>
                        <h3 className="upComingEvents__event-location">{ currentEvent.location } / <b>{ currentEvent.city }</b></h3>
                        <time className="upComingEvents__event-date">{ currentEvent.dateLabel }</time>
                        <p className="upComingEvents__event-description">{ currentEvent.description }</p>
                        <a className={`upComingEvents__event-register ${finalRegisterButtonClass}`} href={ currentEvent.registerLink } target="_blank">
                            {eventIsActive ? 'Register' : 'Passed!'}
                        </a>
                    </div>
                    <div className="upComingEvents__timeline">
                        { this.bars }
                        <div className="upComingEvents__timeline-now" />
                    </div>
                </section>
                <aside className="upComingEvents__aside">
                    <h2>upcoming events</h2>
                    <ul className="upComingEvents__aside-event-list">{ this.eventList }</ul>
                </aside>
            </div>
        )
    }
}

export default Radium(UpComingEvents)