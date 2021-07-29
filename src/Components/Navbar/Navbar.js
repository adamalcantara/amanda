import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>
                <HashLink to="/#shows">Shows</HashLink>
                <Link to="/media">Media</Link>
            </div>
        )
    }
}


export default Navbar