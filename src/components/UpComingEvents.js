import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

import TimelineBar from './sub-components/TimelineBar'

class UpComingEvents extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.showBox}>
                    <div style={styles.selectedEvent}>
                        <h2 style={styles.eventTitle}>HackaKaraj 3</h2>
                        <h3 style={styles.eventLocation}>Startup House / <b>Alborz Karaj</b></h3>
                        <time style={styles.eventDate}>Dec 13 - 25 Aban</time>
                        <p style={styles.eventDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem ea, in iure molestias reprehenderit tempora. Architecto asperiores at aut, cumque distinctio dolor fugit labore, nobis placeat similique velit voluptas.</p>
                        <a style={styles.eventRegister} href="https://evand.com" target="_blank">Register</a>
                    </div>
                    <div className="timeline" style={styles.timeline}>
                        <TimelineBar />
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
        padding: 40,
        paddingLeft: 60,
        paddingRight: 60,
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