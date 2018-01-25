import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header'
import Events from './Events'
import UpComingEvents from './UpComingEvents'
import Members from './Members'
import Sponsors from './Sponsors'

class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <Header height={500} />
                <StyleRoot>

                <Events />
                
                
                <UpComingEvents />
                <Members />
                <Sponsors />
                </StyleRoot>
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