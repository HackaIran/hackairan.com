import Header from './Header';
import Events from './Events';
import UpComingEvents from './UpComingEvents';
import Products from './Products';
import Members from './Members';
import Sponsors from './Sponsors';
import ProgressBar from './ProgressBar';
import Socials from './Socials';

class App extends React.Component {
    render() {
        return (
            <div className='mainPage'>

                <ProgressBar />

                <Header />

                <Events />
                
                <UpComingEvents />

                <Products />

                <Members />

                <Sponsors />

                <Socials />
                
            </div>
            
        )
    }
}

export default App