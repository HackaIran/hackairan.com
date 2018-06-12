import React from 'react'
import Radium from 'radium'

import Product from './sub-components/Product';

class Products extends React.Component {
    render() {
        return (
            <section className="product">
                
                <h2 className="product__header-title">
                    Products, our <span className="highlight">prouds</span>!
                </h2>

                <Product desc={'salam'} title={'title'} />

            </section>
        )
    }
}

export default Radium(Products)