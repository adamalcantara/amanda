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
                <Link to="/">Home</Link>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#shows">Shows</HashLink>
                <Link to="/media">Media</Link>
                <HashLink to="/#contact">Contact</HashLink>
            </div>
        )
    }
}


export default Navbar