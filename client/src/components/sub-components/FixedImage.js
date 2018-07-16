class FixedImage extends React.Component {
    render() {
        const fixedImageStyle = {
            backgroundImage: `url('${this.props.backgroundImage}')`
        };
        return (
            <div className='fixedImage' style={fixedImageStyle}>

            </div>          
        )
    }
}

export default FixedImage;