class Product extends React.Component {
    render() {

        const orderClass = this.props.order ? 'odd' : 'even';

        const background = (this.props.order ? 'linear-gradient(to right, transparent, black 55%)' : 'linear-gradient(to left, transparent, black 55%)') + `, url('${this.props.image}')`

        return (

            <div className={`single-product ${orderClass}`}>

                <div className="single-product__top-gradient" />

                <div className="single-product__content-wrapper" style={{background}}>

                    <div className="single-product__description-wrapper">
                        <h3 className="single-product__description-title">
                            {this.props.title}
                            <span className="highlight">
                                {this.props.highlight}
                            </span>
                        </h3>
                        <p className="single-product__description">
                            {this.props.desc}
                        </p>
                        <a href={this.props.link} target="_blank" className="single-product__more-button">
                            Enlighten me
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product