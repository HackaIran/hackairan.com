import React from 'react'
import Radium from 'radium'
import color from 'color'

import Header from './Header'

class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <Header />
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