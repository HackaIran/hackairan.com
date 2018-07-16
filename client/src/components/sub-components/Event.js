class Event extends React.Component {
    render() {
        console.log(this.props.image);
        return (

            <div className="single-event">

                <div className="single-event__content-wrapper">

                    <div className="single-event__description-wrapper">
                        <h3 className="single-event__description-title">
                            {this.props.title}
                            <span className="highlight">
                                {this.props.highlight}
                            </span>
                        </h3>
                        <p className="single-event__description">
                            {this.props.desc}
                        </p>
                        <a href={this.props.link} target="_blank" className="single-event__more-button">
                            Enlighten me
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Event