import React from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends React.Component {

    render () {
        return (
            <div>
                <div>Contact</div>
                <Link to="/">Go to Home</Link>
            </div>
        )
    }

}