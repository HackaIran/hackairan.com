import Product from './sub-components/Product';

class Products extends React.Component {
    render() {

        return (
            <section className="products">
                
                <h2 className="products__header-title">
                    Our Products, our <span className="highlight">pride!</span>
                </h2>

                <Product order={1} link={`/hope`} image={'assets/images/hope-cover.jpg'} desc={ `HOPE; Hackademy Open-Source Projects Evaluator is an evaluator platform which checks the VCS repository of projects and give an insight over their health; It looks for certain files and global standard metrics within projects and scores them based on their rate of standardization.` } title='HOPE' />
                <Product order={0} link={`/nerdpitch`} desc={ `NerdPitch is an innovative way of representing knowledge and ideas. As the name indicates, it’s a robust way which helps nerds and geeks to disseminate information throughout the world in an interactive way. We have embedded convenient tools within the platform which facilitates the process of creating presentations.` } title='Nerdpitch' />

            </section>
        )
    }
}

export default Products