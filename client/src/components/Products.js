import Product from './sub-components/Product';

class Products extends React.Component {
    render() {

        return (
            <section className="products">
                
                <h2 className="products__header-title">
                    Products, our <span className="highlight">prouds!</span>
                </h2>

                <Product link={`/nerdpitch`} desc={ `NerdPitch is an innovative way of representing knowledge and ideas. As the name indicates, it’s a robust way which helps nerds and geeks to disseminate information throughout the world in an interactive way. We have embedded convenient tools within the platform which facilitates the process of creating presentations.` } title='Nerdpitch' />

            </section>
        )
    }
}

export default Products