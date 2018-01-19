import React from 'react'
import Radium from 'radium'
import Color from 'color'

import colors from '../shared/colors'

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
                location: 'Startup House',
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
            const titleStyle = [
                styles.eventItemTitle,
                (id === this.state.selectedEvent) ? styles.eventItemTitleSelected : {}
            ];
            items.push(<li key={id} style={styles.eventItem} onClick={() => this.selectEvent(id)}>
                <h3 key={'title' + id} style={titleStyle}>{ event.title }</h3>
                <h4 style={styles.eventItemLocation}>{ event.location } / <b>{ event.city }</b></h4>
                <time style={styles.eventItemDate}>{ event.dateLabel }</time>
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
        const additionalStyleForSelectedEvent = this.state.waiting ? {
            opacity: 0,
            transform: 'scale(1.03) translate(-10px, -10px)'
        } : {};
        const eventIsActive = currentEvent.timestamp >= Date.now();
        const finalRegisterButtonStyle = [
            styles.eventRegister, eventIsActive ? {} : {
                background: 'rgb(122, 120, 116)',
                color: '#474747',
                pointerEvents: 'none'
            }
        ];

        return (
            <div style={styles.container}>
                <section style={styles.showBox}>
                    <div style={[styles.selectedEvent, additionalStyleForSelectedEvent]}>
                        <h2 style={styles.eventTitle}>{ currentEvent.title } </h2>
                        <h3 style={styles.eventLocation}>{ currentEvent.location } / <b>{ currentEvent.city }</b></h3>
                        <time style={styles.eventDate}>{ currentEvent.dateLabel }</time>
                        <p style={styles.eventDescription}>{ currentEvent.description }</p>
                        <a style={finalRegisterButtonStyle} href={ currentEvent.registerLink } target="_blank">
                            {eventIsActive ? 'Register' : 'Passed!'}
                        </a>
                    </div>
                    <div className="timeline" style={styles.timeline}>
                        { this.bars }
                        <div className="now" style={styles.now} />
                    </div>
                </section>
                <aside style={styles.aside}>
                    <h2>upcoming events</h2>
                    <ul style={styles.eventList}>{ this.eventList }</ul>
                </aside>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        minHeight: 450,
        marginTop: 0,
        marginBottom: 100,
        flexDirection: 'row',
        color: 'white'
    },
    showBox: {
        flexGrow: 4,
        display: 'flex',
        flexDirection: 'column'
    },
    selectedEvent: {
        flexGrow: 1,
        padding: '40px 60px',
        position: 'relative',
        transitionDuration: '0.3s'
    },
    eventTitle: {
        fontSize: 35,
        color: colors.highlight
    },
    eventLocation: {
        fontWeight: 'normal',
        fontSize: 16,
        marginTop: 5
    },
    eventDate: {
        fontSize: 19,
        color: '#888',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 25,
        display: 'block'
    },
    eventDescription: {
        fontSize: 16,
        fontWeight: 100,
        lineHeight: '25px'
    },
    eventRegister: {
        background: colors.highlight,
        padding: '18px 45px',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
        position: 'absolute',
        top: 47,
        right: 60,

        ':hover': {
            opacity: 0.9,
        }
    },
    timeline: {
        background: 'linear-gradient(transparent, rgba(255, 255, 255, 0.2)',
        flexBasis: 150,
        minHeight: 150,
        position: 'relative'
    },
    now: {
        background: colors.highlight,
    },
    aside: {
        background: colors.dark,
        flexGrow: 1,
        padding: 40,
        minWidth: 330,
        display: 'flex',
        flexDirection: 'column'
    },
    eventList: {
        listStyle: 'none',
        marginTop: 20,
        overflowY: 'auto'
    },
    eventItem: {
        paddingBottom: 10,
        paddingTop: 10,
        borderBottom: '2px dotted #444',
        position: 'relative',
        cursor: 'pointer',
        transitionDuration: 0.2,

        ':hover': {
            opacity: 0.7
        },

        ':active': {
            opacity: 0.5
        }
    },
    eventItemTitle: {
        color: Color(colors.highlight).desaturate(0.95).string(),
        marginTop: 15,
        userSelect: 'none',
    },
    eventItemTitleSelected: {
        color: colors.highlight,
        pointerEvents: 'none'
    },
    eventItemLocation: {
        fontWeight: 100,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 15,
        userSelect: 'none',
    },
    eventItemDate: {
        color: 'white',
        margin: 0,
        fontWeight: 100,
        fontSize: 15,
        padding: '5px 13px',
        background: '#323232',
        borderRadius: 20,
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
        userSelect: 'none',
    }
};

export default Radium(UpComingEvents)