import React from 'react'
import Radium from 'radium'

import Event from './sub-components/Event'

class Events extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Event title="HackaTeamup" icon='./assets/images/teamup.png' />
                <Event title="Hackademy" icon='./assets/images/hackademy.png' />
            </div>
        )
    }
}

const styles = {
    container: {
        perspective: '1000px',
        textAlign: 'center',
        width: '100%',
        height: 315,
        overflowX: 'auto',
        whiteSpace: 'nowrap'
    }
};

export default Radium(Events)