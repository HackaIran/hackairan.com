import React from 'react'
import Radium from 'radium'

class Members extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            members: [{
                username: 'alirezasheikholmolouki',
                name: 'Alireza Sheikholmolouki',
                description: 'Co-Founder & Tech Manager',
                socials:{}
            }, {
                username: 'shayansabery',
                name: 'Shayan Sabery',
                description: 'Co-Founder & Event Manager',
                socials:{}
            }, {
                username: 'alishahabbasi',
                name: 'Ali Shahabbasi',
                description: 'Developer and IT Consults',
                socials:{}
            }, {
                username: 'pouyamozaffarmagham',
                name: 'Pouya MozaffarMagham',
                description: 'Developer and IT Consults',
                socials:{}
            }, {
                username: 'pouyasedighi',
                name: 'Pouya Sedighi',
                description: 'Social Media Manager',
                socials:{}
            }]
        }
    }

    getMember (i) {
        const member = this.state.members[i];
        return (
            <div key={i} className="member">
                <div className="member__image-wrapper">
                    <img src={`./assets/avatars/${ member.username }.jpg`} className="member__image" />
                </div>
                <h3 className="member__name">{ member.name }</h3>
                <p className="member__description">{ member.description }</p>
                <div className="member__socials">
                    <div className={"member__social " + (member.socials.dribble ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Dribble'}>
                            <img alt={'Dribble'} src={'./assets/images/social/dribble.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (member.socials.email ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Email'}>
                            <img alt={'Email'} src={'./assets/images/social/email.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (member.socials.linkedin ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'LinkedIn'}>
                            <img alt={'LinkedIn'} src={'./assets/images/social/linkedin.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (member.socials.skype ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Skype'}>
                            <img alt={'Skype'} src={'./assets/images/social/skype.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (member.socials.twitter ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Twitter'}>
                            <img alt={'Twitter'} src={'./assets/images/social/twitter.svg'} />
                        </a>
                    </div>
                    <div className={"member__social " + (member.socials.site ? null : "member--not-available")}>
                        <a href={'#'} target={'_blank'} title={'Personal Site'}>
                            <img alt={'Personal Site'} src={'./assets/images/social/www.svg'} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    get members () {
        const members = [];
        for (let i = 0; i < this.state.members.length; i++) members.push(this.getMember(i));
        return members;
    }

    render() {
        return (
            <div className="members">
                <h2 className="members__header-title">People who truly believe in <strong className="highlight">Hacka</strong></h2>
                <div className="members__member-wrapper">{ this.members }</div>
            </div>
        )
    }
}

export default Radium(Members)