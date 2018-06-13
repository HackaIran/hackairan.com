import React from 'react'
import Radium,{StyleRoot} from 'radium'

import Header from './Header';
import Events from './Events';
import UpComingEvents from './UpComingEvents';
import Products from './Products';
import Members from './Members';
import Sponsors from './Sponsors';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <Events />
                
                <UpComingEvents />

                <Products />

                <Members />

                <Sponsors />
                
            </div>
            
        )
    }
}

export default Radium(App)