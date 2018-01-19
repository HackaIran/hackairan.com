import React from 'react'
import Radium from 'radium'

import locals from '../shared/strings'
import colors from '../shared/colors'

class Header extends React.Component {
    render() {
        return (
            <header style={[styles.container, { height: this.props.height }]}>
                <video src="./assets/videos/header.mp4" autoPlay loop={true} style={styles.video} />
                <div style={styles.gradient} />
                <div style={styles.wrapper}>
                    <img style={styles.logo} src="./assets/images/hacka_white.png" alt="Hacka{Iran}"/>
                    <h1 style={styles.title}>Hacka<span style={{ color: colors.highlight }}>{'{Iran}'}</span></h1>
                    <p style={styles.description}>{locals.header.description}</p>
                </div>
                <div className="arrow-down" style={styles.arrowDown} />
            </header>
        )
    }
}

const styles = {
    container: {
        background: colors.dark,
        width: '100%',
        position: 'relative',
        marginTop: -5,
        overflow: 'hidden'
    },
    video: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '100%',
        minHeight: '100%',
        zIndex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85), #000)',
        zIndex: 2,
    },
    wrapper: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 550,
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -60%)',
        zIndex: 3,
    },
    logo: {
        width: 180,
        pointerEvents: 'none',
        userSelect: 'none'
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'normal',
        marginBottom: 25,
        pointerEvents: 'none',
        userSelect: 'none'
    },
    description: {
        color: 'white',
        fontSize: 18,
        fontWeight: 100,
        lineHeight: '25px'
    },
    arrowDown: {
        position: 'absolute',
        bottom: '16%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
    }
};

export default Radium(Header)