class ProgressBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            style:{
                width: '0%'
            }
        }

    }

    render() {
        return (
            <div style={this.state.style} className="progressBar">

            </div>
        )
    }

    componentDidMount(){
        let progressInterVal = setInterval(()=>{
            if(parseInt(this.state.style.width) == 95){
                clearInterval(progressInterVal)
            }else{
                this.setState({
                    style:{
                        width: parseInt(this.state.style.width) + 5 + '%'
                    }
                });
            }
        },1000)
    }
}

export default ProgressBar