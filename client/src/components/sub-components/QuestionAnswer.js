class Header extends React.Component {
    render() {

        const answer = this.props.QA.answer;
        const question = this.props.QA.question;

        return (
            <article className='questionAnswer'>
                <header className='questionAnswer__question'>
                    {question}
                </header>
                <div className='questionAnswer__answer'>
                    {answer}
                </div>
            </article>            
        )
    }
}

export default Header