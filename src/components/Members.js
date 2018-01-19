import React from 'react'
import Radium from 'radium'

import colors from '../shared/colors'

class Members extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            members: [{
                username: 'alirezasheikholmolouki',
                name: 'Alireza Sheikholmolouki',
                description: 'Co-Founder & Tech Manager'
            }, {
                username: 'shayansabery',
                name: 'Shayan Sabery',
                description: 'Co-Founder & Event Manager'
            }, {
                username: 'alishahabbasi',
                name: 'Ali Shahabbasi',
                description: 'Everything Developer and IT Consults'
            }, {
                username: 'pouya',
                name: 'Pouya MozzafarMagham',
                description: 'Everything Developer and IT Consults'
            }, {
                username: 'Pouya',
                name: 'Pouya Sedighi',
                description: 'Social Media Manager'
            }]
        }
    }

    getMember (i) {
        const member = this.state.members[i];
        return (
            <div key={i} style={styles.member}>
                <div style={ styles.avatarContainer }>
                    <video src={`./assets/avatars/${ member.username }.mp4`} autoPlay loop style={ styles.avatar } />
                </div>
                <h3 style={styles.name}>{ member.name }</h3>
                <p style={styles.description}>{ member.description }</p>
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
            <div style={styles.container}>
                <h2 style={styles.title}>People who truly believe in <strong style={styles.strong}>Hacka</strong></h2>
                <div style={styles.membersContainer}>{ this.members }</div>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: 230,
        marginBottom: 100,
        marginLeft: 50,
        marginRight: 50,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    strong: {
        color: colors.highlight,
    },
    avatarContainer: {
        width: 180,
        height: 180,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        margin: 'auto',
    },
    avatar: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    membersContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    member: {
        color: 'white',
        margin: 20,
        width: 200,
        textAlign: 'center'
    },
    name: {
        marginTop: 5
    },
    description: {
        marginTop: 10
    }
};

export default Radium(Members)