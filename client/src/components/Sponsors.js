import React from 'react'
import Radium from 'radium'

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
            <div key={sponsor.name} className="sponsor">
                <a href={sponsor.link} target="_blank">
                    <img
                        src={`./assets/images/sponsors/${sponsor.image}`}
                        alt={`Hacka Sponsors | ${sponsor.name}`} />
                </a>
            </div>
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

export default Radium(Sponsors)