import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

import TimelineBar from './sub-components/TimelineBar'

class UpComingEvents extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedEvent: {
                id: -1,
                title: 'loading',
                location: 'loading',
                city: 'loading',
                timestamp: Date.now() + 100000000,
                description: 'loading',
                registerLink: ''
            },
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
                title: 'Hacka{Karaj} 3',
                location: 'Startup House',
                city: 'Karaj, Iran',
                timestamp: 1512551313547,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem ea, in iure molestias reprehenderit tempora. Architecto asperiores at aut, cumque distinctio dolor fugit labore, nobis placeat similique velit voluptas.',
                registerLink: 'https://evand.com/startuphouse'
            },
            {
                id: 1,
                title: 'Hackademy',
                location: 'Avatech',
                city: 'Tehran, Iran',
                timestamp: 1517051313547,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ciure molestias reprehenderit tempora. Architecto asperiores at aut, cumque distinctio dolor fugit labore, nobis placeat similique velit voluptas.',
                registerLink: 'https://evand.com/avatech'
            },
            {
                id: 2,
                title: 'Hacka{Karaj} 4',
                location: 'Azad University Of Karaj',
                city: 'Karaj, Iran',
                timestamp: 1516051313547,
                description: 'Lorem ipsum dolor sit amet, cng elit. Culpa dolorem ea, in iure molestias reprehenderit tempora. Architecto asperiores at aut, cumque distinctio dolor fugit labore, nobis placeat similique velit voluptas.',
                registerLink: 'https://evand.com/azad'
            }
        ];
        this.setState({ events: events, selectedEvent: events[0] });
    }

    get bars () {
        const bars = [];
        for (let event of this.state.events) {
            bars.push(<TimelineBar
                key={event.id}
                timestamp={event.timestamp}
                active={ this.state.selectedEvent.id === event.id }
            />)
        }
        return bars;
    }

    render() {
        const currentEvent = this.state.selectedEvent;
        return (
            <div style={styles.container}>
                <div style={styles.showBox}>
                    <div style={styles.selectedEvent}>
                        <h2 style={styles.eventTitle}>{ currentEvent.title } </h2>
                        <h3 style={styles.eventLocation}>{ currentEvent.location } / <b>{ currentEvent.city }</b></h3>
                        <time style={styles.eventDate}>{ currentEvent.timestamp }</time>
                        <p style={styles.eventDescription}>{ currentEvent.description }</p>
                        <a style={styles.eventRegister} href={ currentEvent.registerLink } target="_blank">Register</a>
                    </div>
                    <div className="timeline" style={styles.timeline}>
                        { this.bars }
                        <div className="now" style={styles.now} />
                    </div>
                </div>
                <aside style={styles.aside}>
                    <h2>upcoming events</h2>
                    <ul style={styles.eventList}>
                        <li key="item1" style={styles.eventItem}>
                            <h3 style={styles.eventItemTitle}>HackaKaraj2</h3>
                            <h4 style={styles.eventItemLocation}>Startup House / <b>Karaj, Iran</b></h4>
                            <time style={styles.eventItemDate}>Dec 13</time>
                        </li>
                        <li key="item2" style={styles.eventItem}>
                            <h3 style={styles.eventItemTitle}>HackaKaraj2</h3>
                            <h4 style={styles.eventItemLocation}>Startup House / <b>Karaj, Iran</b></h4>
                            <time style={styles.eventItemDate}>Dec 13</time>
                        </li>
                        <li key="item3" style={styles.eventItem}>
                            <h3 style={styles.eventItemTitle}>HackaKaraj2</h3>
                            <h4 style={styles.eventItemLocation}>Startup House / <b>Karaj, Iran</b></h4>
                            <time style={styles.eventItemDate}>Dec 13</time>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        minHeight: 450,
        marginTop: 50,
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
        position: 'relative'
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
        color: colors.highlight,
        marginTop: 15,
        userSelect: 'none',
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