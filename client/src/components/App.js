import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header';
import Events from './Events';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <Events>

                </Events>
            </div>
            
        )
    }
}

export default Radium(App)