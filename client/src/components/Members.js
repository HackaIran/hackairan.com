import Member from './sub-components/Member';

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
                username: 'mohammad',
                name: 'Mohammad H.Shahin',
                description: 'R&D Director',
                socials:{}
            },{
                username: 'goudarz',
                name: 'Goudarz Firoozi',
                description: 'Finance Director',
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
            <Member username={this.state.members[i].username} name={this.state.members[i].name} description={this.state.members[i].description} socials={this.state.members[i].socials} />
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

export default Members