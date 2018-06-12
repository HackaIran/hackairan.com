import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header';
import Events from './Events';
import UpComingEvents from './UpComingEvents';
import Products from './Products';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <Events>

                </Events>
                
                <Products />
                
            </div>
            
        )
    }
}

export default Radium(App)