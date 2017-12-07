import React from 'react'
import styled from 'styled-components'

export default class GalleryPlayer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            current: 0
        };

        this.Slide = styled.div`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition-duration: ${this.props.interval / 1.3}ms;
            opacity: ${props => props.show ? 1 : 0};
            transform: scale(${props => props.show ? 1.1 : 1});
        `;

    }

    componentDidMount () {
        this.next();
    }

    next () {
        const next = this.state.current + 1;
        this.setState({ current: next < this.props.images.length ? next : 0 });
        setTimeout(this.next.bind(this), this.props.interval)
    }

    get images () {
        const tags = [];
        const dir = this.props.dir;
        const curr = this.state.current;
        for (let i in this.props.images) {
            const src = dir + this.props.images[i];
            tags.push(<this.Slide show={curr === parseInt(i)} key={i} style={{ backgroundImage: `url(${src})` }} />)
        }
        return tags;
    }

    render () {
        return (
            <div>{ this.images }</div>
        )
    }

}