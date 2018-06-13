import React from 'react'

class Product extends React.Component {
    render() {
        return (

            <div className="single-product">

                <div className="single-product__top-gradient" />

                <div className="single-product__content-wrapper">
                    <div className="single-product__image-wrapper">
                        <img src={this.props.image} className="single-product__image" />
                    </div>

                    <div className="single-product__description-wrapper">
                        <h3 className="single-product__description-title">
                            {this.props.title}
                        </h3>
                        <p className="single-product__description">
                            {this.props.desc}
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product