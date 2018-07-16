class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <video className="header__video" src="./assets/videos/header.mp4" autoPlay loop={true} />
                <div className="header__gradient" />
                <div className="header__content-wrapper">
                    <img className="header__logo" src="./assets/images/hacka_white.png" alt="Hacka{Iran}"/>
                    <h1 className="header__title">Hacka<span className="highlight">{'{Iran}'}</span></h1>
                    <p className="header__description">{`Hacka{Iran} is a local community of technologists. Our vision is to become Iran's leading futuristic services provider.`}</p>
                </div>
                <div className="header__arrow-down goDownAnimation" />
            </header>
        )
    }
}

export default Header