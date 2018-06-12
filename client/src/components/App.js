import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header';
import Events from './Events';
import UpComingEvents from './UpComingEvents';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <Events>

                </Events>
                <StyleRoot>
                    <UpComingEvents>

                    </UpComingEvents>
                </StyleRoot>
                
            </div>
            
        )
    }
}

export default Radium(App)