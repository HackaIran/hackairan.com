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
                    image: 'reyhoon.jpg',
                    link: 'https://reyhoon.com/'
                }
            ]
        };
    }

    get sponsors () {
        const sponsors = [];
        for (let sponsor of this.state.sponsers) sponsers.push(
            <div>
                <img src={sponsor.image} alt={`Hacka Sponsors | ${sponsor.name}`} />
            </div>
        );
        return sponsors;
    }

    render() {
        return (
            <div style={styles.container}>
                <h3 style={styles.title}>Our Sponsors, <strong style={styles.strong}>Our Friends!</strong></h3>
                <div>{ this.sponsors }</div>
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
};

export default Radium(Sponsers)