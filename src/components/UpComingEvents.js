import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

class UpComingEvents extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.showBox}>
                    <h2>Part</h2>
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
                        <li key="item4" style={styles.eventItem}>
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
        height: 500,
        marginTop: 50,
        marginBottom: 100,
        flexDirection: 'row',
        color: 'white'
    },
    aside: {
        background: colors.dark,
        flexGrow: 1,
        padding: 40,
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
        marginTop: 15
    },
    eventItemLocation: {
        fontWeight: 100,
        marginTop: 15,
        marginBottom: 15
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
        right: 0,
        transform: 'translateY(-50%)'
    },
    showBox: {
        flexGrow: 4
    }
};

export default Radium(UpComingEvents)