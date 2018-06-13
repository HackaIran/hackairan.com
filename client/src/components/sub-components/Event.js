class Event extends React.Component {
    render() {
        return (

            <div className="single-event">

                <div className="single-event__top-gradient" />

                <div className="single-event__content-wrapper">
                    <div className="single-event__image-wrapper">
                        <img src={this.props.image} className="single-event__image" />
                    </div>

                    <div className="single-event__description-wrapper">
                        <h3 className="single-event__description-title">
                            {this.props.title}
                        </h3>
                        <p className="single-event__description">
                            {this.props.desc}
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Event