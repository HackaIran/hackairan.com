import SubPageHeader from './SubPageHeader';
import ProgressBar from './ProgressBar';
import QuestionsSection from './QASection';

class App extends React.Component {
    render() {
        return (
            <div className='subPage'>

                <ProgressBar />

                <SubPageHeader />

                <QuestionsSection />

            </div>
            
        )
    }
}

export default App