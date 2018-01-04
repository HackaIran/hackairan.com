import React from 'react'
import Radium from 'radium'

import colors from '../../shared/colors'

class Event extends React.Component {
    render() {
        const styledTitle = this.props.title.replace('Hacka', '<span class="white">Hacka</span>');
        return (
            <div className="event" key="event" style={styles.container}>
                <img key="icon" src={this.props.icon} style={styles.image} alt={this.props.title} />
                <h2 key="title" style={styles.title} dangerouslySetInnerHTML={{ __html: styledTitle }} />
            </div>
        )
    }
}

const styles = {
    container: {
        width: 230,
        height: 230,
        display: 'inline-block',
        marginRight: 8,
        marginLeft: 8,
        background: colors.dark,
        borderRadius: 15,
        position: 'relative',
        cursor: 'pointer',
        transitionDuration: '0.1s',

        ':hover': {
            opacity: 0.8
        },

        ':active': {
            transform: 'scale(0.98)',
            opacity: 0.6
        }
    },
    image: {
        height: 110,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) translateY(-20px)',
        userSelect: 'none'
    },
    title: {
        fontSize: 27,
        color: colors.highlight,
        fontWeight: 'normal',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) translateY(70px)'
    }
};

export default Radium(Event)