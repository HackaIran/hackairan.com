import React from 'react'

export default class GalleryPlayer extends React.Component {

    get images () {
        const tags = [];
        const dir = this.props.dir;
        for (let i in this.props.images) {
            const src = dir + this.props.images[i];
            const style = Object.assign({}, styles.slide, { backgroundImage: `url(${src})` });
            console.log(style)
            tags.push(<div key={i} style={style} />)
        }
        return tags;
    }

    render () {
        return (
            <div style={styles.container}>
                { this.images }
            </div>
        )
    }

}

const styles = {
    container: {

    },
    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
};