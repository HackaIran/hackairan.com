import React from 'react'
import Radium from 'radium'

class UpComingEvents extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Hello</h1>
            </div>
        )
    }
}

const styles = {
    container: {}
};

export default Radium(UpComingEvents)