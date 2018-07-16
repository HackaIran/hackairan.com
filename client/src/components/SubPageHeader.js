class Header extends React.Component {
    render() {
        return (
            <header className="subPageHeader">
                
                <h1 className='subPageHeader__main-name'>
                    {window.title.prefix}<span className='highlight'>{window.title.suffix}</span>
                </h1>

                <h3 className='subPageHeader__made-with'>
                    made in <a href=""><img src='./assets/images/hacka_white.png' /></a>
                </h3>

                <a target="_blank" href='#' className='subPageHeader__enter-website subPageHeader__enter-website--soon'>
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