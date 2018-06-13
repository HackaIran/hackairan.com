import Event from './sub-components/Event';

class Events extends React.Component {
    render() {
        return (
            <section className="events">
                
                <h2 className="events__header-title">
                    Events, our <span className="highlight">identity</span>!
                </h2>

                <Event desc={'salam'} title={'title'} />

            </section>
        )
    }
}

export default Events