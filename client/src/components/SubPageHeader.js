class Header extends React.Component {
    render() {

        let soonClass;

        if(window.title.website == ''){
            soonClass = ' subPageHeader__enter-website--soon';
        }else{
            soonClass = '';
        }   

        return (
            <header className="subPageHeader">
                
                <h1 className='subPageHeader__main-name'>
                    {window.title.prefix}<span className='highlight'>{window.title.suffix}</span>
                </h1>

                <h3 className='subPageHeader__made-with'>
                    made in <a href="http://hackairan.com/"><img src='./assets/images/hacka_white.png' /></a>
                </h3>

                <a href={`${window.title.website}`} target="_blank" className={`subPageHeader__enter-website${soonClass}`}>
                    Enter {window.title.title}'s website
                </a>

                <span className='subPageHeader__or-text'>- or -</span>

                <span className='subPageHeader__read-more-text'>
                    read more about it
                </span>

                <div className='subPageHeader__arrow-down goDownAnimation'>

                </div>

            </header>
        )
    }
}

export default Header