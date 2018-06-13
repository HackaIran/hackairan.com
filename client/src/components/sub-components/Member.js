class Member extends React.Component {
    render() {
        return (
            <div key={this.props.username} className="member">
                <div className="member__image-wrapper">
                    <img src={`./assets/avatars/${ this.props.username }.jpg`} className="member__image" />
                </div>
                <h3 className="member__name">{ this.props.name }</h3>
                <p className="member__description">{ this.props.description }</p>
                <div className="member__socials">
                    <div className={"member__social " + (this.props.socials.dribble ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Dribble'}>
                            <img alt={'Dribble'} src={'./assets/images/social/dribble.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (this.props.socials.email ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Email'}>
                            <img alt={'Email'} src={'./assets/images/social/email.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (this.props.socials.linkedin ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'LinkedIn'}>
                            <img alt={'LinkedIn'} src={'./assets/images/social/linkedin.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (this.props.socials.skype ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Skype'}>
                            <img alt={'Skype'} src={'./assets/images/social/skype.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (this.props.socials.twitter ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Twitter'}>
                            <img alt={'Twitter'} src={'./assets/images/social/twitter.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (this.props.socials.site ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Personal Site'}>
                            <img alt={'Personal Site'} src={'./assets/images/social/www.svg'} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member