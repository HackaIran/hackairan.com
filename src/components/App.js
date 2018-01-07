import React from 'react'
import Radium from 'radium'
import color from 'color'

import Header from './Header'
import Events from './Events'
import UpComingEvents from './UpComingEvents'

class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <Header height={500} />
                <Events />
                <UpComingEvents />
            </div>
        )
    }
}

const styles = {
    app: {
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    }
};

export default Radium(App)