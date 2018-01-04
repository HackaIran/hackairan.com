import React from 'react'
import Radium from 'radium'

class TimelineBar extends React.Component {
    render() {
        const left = 10;
        return (
            <div style={[styles.container, {left: left + '%'}]}>
                <div style={styles.downBar}>
                    <span style={styles.date}>Dec 20</span>
                    <span style={styles.toGo}>5 Days to go</span>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        width: 2,
        height: 200,
        transform: 'translateX(-50%)',
        background: 'linear-gradient(transparent, #DDD)',
        position: 'absolute',
        bottom: -20,
    },
    downBar: {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        width: 40,
        height: 2,
        background: '#DDD',
        transform: 'translateX(-50%)',
    },
    date: {
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        bottom: -31,
        left: '50%',
        whiteSpace: 'nowrap',
        transform: 'translateX(-50%)',
    },
    toGo: {
        fontSize: 13,
        position: 'absolute',
        bottom: -50,
        left: '50%',
        whiteSpace: 'nowrap',
        color: '#AAA',
        transform: 'translateX(-50%)',
    }
};

export default Radium(TimelineBar)