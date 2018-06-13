import React from 'react'

import Sponsor from './sub-components/Sponsor';

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
            <Sponsor name={sponsor.name} image={sponsor.image} link={sponsor.link} />
        );
        return sponsors;
    }

    render() {
        return (
            <div className="sponsors">
                <h3 className="sponsors__header-title">Our Sponsors, <strong className="highlight">Our Friends!</strong></h3>
                <div className="sponsors__sponsor-wrapper">{ this.sponsors }</div>
            </div>
        )
    }

}

export default Sponsors