import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    
                </Header>
            </div>
        )
    }
}

export default Radium(App)