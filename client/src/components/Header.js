class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <video className="header__video" src="http://g1.asset.aparat.com/flv_video_new/3740/88587cc3563d963656ee71b9bfe61a3e11217796-240p.apt" autoPlay loop={true} />
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