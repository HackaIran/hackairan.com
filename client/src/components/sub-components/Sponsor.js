import React from 'react'
import Radium from 'radium'

class Sponsor extends React.Component {
    render() {
        return (
            <div key={this.props.name} className="sponsor">
                <a href={this.props.link} target="_blank">
                    <img
                        src={`./assets/images/sponsors/${this.props.image}`}
                        alt={`Hacka Sponsors | ${this.props.name}`} />
                </a>
            </div>
        )
    }
}

export default Radium(Sponsor)