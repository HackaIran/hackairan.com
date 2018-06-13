import Header from './Header';
import Events from './Events';
import UpComingEvents from './UpComingEvents';
import Products from './Products';
import Members from './Members';
import Sponsors from './Sponsors';
import ProgressBar from './ProgressBar';

class App extends React.Component {
    render() {
        return (
            <div>

                <ProgressBar />

                <Header />

                <Events />
                
                <UpComingEvents />

                <Products />

                <Members />

                <Sponsors />
                
            </div>
            
        )
    }
}

export default App