import React from 'react'
import Radium from 'radium'

import Product from './sub-components/Product';

class Products extends React.Component {
    render() {
        return (
            <section className="products">
                
                <h2 className="products__header-title">
                    Products, our <span className="highlight">prouds</span>!
                </h2>

                <Product desc={'salam'} title={'title'} />

            </section>
        )
    }
}

export default Radium(Products)