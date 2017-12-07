import React from 'react'
import { } from 'react-router-dom'
import { Title, Center, Primary, BlackGradient } from "../components/styles"

export default class Home extends React.Component {

    render () {
        return (
            <div>
                <header style={styles.header}>
                    <Center>
                        <img width={190} src="./assets/images/logo.png" alt="Hacka White Logo"/>
                        <Title>Hacka<Primary>{'{Iran}'}</Primary></Title>
                    </Center>
                    <BlackGradient />
                    <video src="./assets/videos/bg.mp4" style={styles.video} autoPlay={true} loop />
                </header>
            </div>
        )
    }

}

const styles = {

    header: {
        position: 'relative',
        height: 500,
        overflow: 'hidden'
    },
    video: {
        width: '100%'
    }
};