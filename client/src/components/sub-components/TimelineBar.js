import React from 'react'
import Radium from 'radium'
import moment from 'moment'

class TimelineBar extends React.Component {
    render() {
        const date = moment(this.props.timestamp);
        const diffWithNow = -moment().diff(date, 'days');
        let remaining = Math.abs(diffWithNow) + ' days';
        if (Math.abs(diffWithNow) > 30) remaining = '~' + Math.floor(Math.abs(diffWithNow) / 30) + ' months';
        remaining += diffWithNow < 0 ? ' ago' : ' to go';
        if (diffWithNow === 0) remaining = 'today';
        const left = (diffWithNow / 60 * 50) + 50;
        const containerStyle = [styles.container, {left: left + '%'}];
        if (!this.props.active) containerStyle.push(styles.notActive);
        return (
            <div style={containerStyle} onClick={() => this.props.onClick()}>
                <div style={styles.downBar}>
                    <span style={styles.date}>{ date.format('ll').split(',')[0] }</span>
                    <span style={styles.remaining}>{ remaining }</span>
                </div>
                <div style={styles.clickArea} />
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
        transitionDuration: '0.3s',
        bottom: -20,
        pointerEvents: 'none'
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
    remaining: {
        fontSize: 12,
        position: 'absolute',
        bottom: -50,
        left: '50%',
        whiteSpace: 'nowrap',
        color: '#AAA',
        transform: 'translateX(-50%)',
    },
    clickArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 45,
        height: '100%',
        transform: 'translateX(-50%)'
    },
    notActive: {
        transform: 'scale(0.95)',
        opacity: 0.3,
        cursor: 'pointer',
        pointerEvents: 'auto',

        ':hover': {
            transform: 'scale(0.96)',
            opacity: 0.45
        }
    }
};

export default Radium(TimelineBar)