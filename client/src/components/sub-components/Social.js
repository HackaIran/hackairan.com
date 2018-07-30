class Social extends React.Component {
    render() {
        
        return (

            <a className='hackaSocials__social-link' target='_blank' href={this.props.link}>
                <img className='hackaSocials__social-icon' src={`/assets/images/social/${this.props.icon}`} />
            </a>
        )
    }
}

export default Social