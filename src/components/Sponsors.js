import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

class Sponsors extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            sponsors: [
                {
                    name: 'Reyhoon',
                    image: 'reyhoon.png',
                    link: 'https://reyhoon.com/'
                },
                {
                    name: 'Pardis',
                    image: 'pardis.png',
                    link: 'http://pardis.ir/'
                },
                {
                    name: 'Tab30',
                    image: 'tab30.png',
                    link: 'https://tap30.ir/'
                }
            ]
        };
    }

    get sponsors () {
        const sponsors = [];
        for (let sponsor of this.state.sponsors) sponsors.push(
            <div key={sponsor.name} style={styles.sponsor}>
                <a href={sponsor.link} target="_blank">
                    <img style={styles.image}
                        src={`./assets/images/sponsors/${sponsor.image}`}
                        alt={`Hacka Sponsors | ${sponsor.name}`} />
                </a>
            </div>
        );
        return sponsors;
    }

    render() {
        return (
            <div style={styles.container}>
                <h3 style={styles.title}>Our Sponsors, <strong style={styles.strong}>Our Friends!</strong></h3>
                <div style={styles.sponsorsContainer}>{ this.sponsors }</div>
            </div>
        )
    }

}

const styles = {
    container: {
        marginTop: 150,
        marginBottom: 100,
        marginLeft: 50,
        marginRight: 50,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    strong: {
        color: colors.highlight,
    },
    sponsorsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

        '@media only screen and (max-width: 700px)':{
            display:"block",
            textAlign:"center"
        }

    },
    sponsor: {
        padding: 20,
        transitionDuration: '0.2s',
        cursor: 'pointer',

        ':hover': {
            transform: 'scale(1.1)',
            opacity: 0.8,
        },

        ':active': {
            opacity: 0.4,
        },

        '@media only screen and (max-width: 700px)':{
            display:"inline-block"
        }

    },
    image: {
        width: 100,
    },
    sponsorName: {
        color: 'white',
        textAlign: 'center'
    }
};

export default Radium(Sponsors)