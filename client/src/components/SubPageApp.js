import SubPageHeader from './SubPageHeader';
import ProgressBar from './ProgressBar';

class App extends React.Component {
    render() {
        return (
            <div className='subPage'>

                <ProgressBar />

                <SubPageHeader />
                
            </div>
            
        )
    }
}

export default App