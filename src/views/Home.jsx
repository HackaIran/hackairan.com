import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    render () {
        return (
            <div>
                <div>HOME</div>
                <Link to="/contact">Go to contact</Link>
            </div>
        )
    }

}