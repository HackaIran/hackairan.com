import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

class Members extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>People who truly believe in <strong style={styles.strong}>Hacka</strong></h2>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: 230,
        marginBottom: 100,
        marginLeft: 50,
        marginRight: 50,
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    strong: {
        color: colors.highlight
    }
};

export default Radium(Members)