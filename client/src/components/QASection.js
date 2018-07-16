import QuestionAnswer from './sub-components/QuestionAnswer';
import FixedImage from './sub-components/FixedImage';


class QASection extends React.Component {

    getQAFromServer(){
        const QAData = [
            {
                question: "What is Hackademy?",
                answer: "It is none of your business.",
                afterImage: "assets/images/eventBack.jpg"
            },
            {
                question: "What is Hackademy?",
                answer: "It is none of your business."
            }
        ];
        return QAData;
    }

    get tags(){

        let QAData = this.getQAFromServer();

        let tagsToBeReturned = [];

        for(let QA of QAData){

            tagsToBeReturned.push(<QuestionAnswer QA={{question: QA.question, answer: QA.answer}} />);

            if(QA.afterImage){
                tagsToBeReturned.push(<FixedImage backgroundImage={QA.afterImage} />);
            }

        }

        return tagsToBeReturned;

    }
    
    render() {

        return (
            
            <React.Fragment>
                { this.tags }
            </React.Fragment>

        )
    }

   
}

export default QASection;