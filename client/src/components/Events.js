import Event from './sub-components/Event';

class Events extends React.Component {
    render() {

        return (
            <section className="events">
                
                <h2 className="events__header-title">
                    Our Events, our <span className="highlight">identity!</span>
                </h2>

                <Event link={`/hackateamup`} desc={`HackaTeamup is a quarterly programming contest with the main purpose of introducing developers to the world’s cutting-edge technological trends and building a powerful community amongst developers. At the end of each contest everyone will gather, interact with the other members of the community and get a free pizza.`} image='assets/images/eventBack.jpg' title='Hacka' highlight='Teamup' />
                <Event link={`/hackademy`} desc={`Hackademy is a pioneer event in the field of open-source development with the sole purpose of promoting the open-source culture. Here we teach developers how to standardize their open-source projects and spread their words within meetings to other developers. They could get contributors and prevent reinventing the wheel.`} title='Hacka' highlight='demy' />

            </section>
        )
    }
}

export default Events