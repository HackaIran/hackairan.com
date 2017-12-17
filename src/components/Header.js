import React from 'react'
import Radium from 'radium'

import locals from '../shared/strings'
import colors from '../shared/colors'

class Header extends React.Component {
    render() {
        return (
            <header style={styles.container}>
                <div style={styles.wrapper}>
                    <img style={styles.logo} src="./assets/images/hacka_white.png" alt="Hacka{Iran}"/>
                    <h1 style={styles.title}>Hacka<span style={{ color: colors.highlight }}>{'{Iran}'}</span></h1>
                    <p style={styles.description}>{locals.header.description}</p>
                </div>
            </header>
        )
    }
}

const styles = {
    container: {
        background: colors.dark,
        width: '100%',
        height: 500,
        position: 'relative',
        marginTop: -5
    },
    wrapper: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 500,
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
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
        marginBottom: 10,
        pointerEvents: 'none',
        userSelect: 'none'
    },
    description: {
        color: 'white',
        fontSize: 15,
        fontWeight: 100,
        lineHeight: '25px'
    }
};

export default Radium(Header)