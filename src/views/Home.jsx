import React from 'react'
import { } from 'react-router-dom'
import { Title, CenterBox, Primary, BlackGradient } from "../components/styles"
import GalleryPlayer from "../components/GalleryPlayer";

export default class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            gallery: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        };
    }

    render () {
        return (
            <div>
                <header style={styles.header}>
                    <CenterBox>
                        <img width={190} src="./assets/images/logo.png" alt="Hacka White Logo"/>
                        <Title>Hacka<Primary>{'{Iran}'}</Primary></Title>
                    </CenterBox>
                    <BlackGradient />
                    <GalleryPlayer interval={4000} dir="./assets/images/gallery/" images={this.state.gallery} />
                </header>
            </div>
        )
    }

}

const styles = {
    header: {
        position: 'relative',
        height: 600,
        overflow: 'hidden'
    }
};