class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <video className="header__video" src="https://as1.cdn.asset.aparat.com/aparat-video/b906acebfc9fb2bdc122c4fe4d4c67079318264-144p__35098.mp4" autoPlay loop={true} />
                <div className="header__gradient" />
                <div className="header__content-wrapper">
                    <img className="header__logo" src="./assets/images/hacka_white.png" alt="Hacka{Iran}"/>
                    <h1 className="header__title">Hacka<span className="highlight">{'{Iran}'}</span></h1>
                    <p className="header__description">{`Hacka{Iran} is a non-profit local community of technologists. Our vision is to become Iran's leading futuristic services provider.`}</p>
                </div>
                <div className="header__arrow-down" />
            </header>
        )
    }
}

export default Header