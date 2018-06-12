import React from 'react'
import Radium from 'radium'

import Event from './sub-components/Event';

class Events extends React.Component {
    render() {
        return (
            <section className="event">
                
                <h2 className="event__header-title">
                    Events, our <span className="highlight">identity</span>!
                </h2>

                <Event desc={'salam'} title={'title'} />

            </section>
        )
    }
}

export default Radium(Events)