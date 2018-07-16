class Product extends React.Component {
    render() {
        return (

            <div className="single-product">

                <div className="single-product__top-gradient" />

                <div className="single-product__content-wrapper">

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
                            See Through
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product