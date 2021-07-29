import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import Logo from "../../Assets/img/amandacacace.png"

import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div id="navigation">
                <img src={Logo} alt="Amanda Cacace Logo"></img>
                <div id="navbar">
                    <Link to="/" className="navlinks">Home</Link>
                    <HashLink to="/#about" className="navlinks">About</HashLink>
                    <HashLink to="/#shows" className="navlinks">Shows</HashLink>
                    <Link to="/media" className="navlinks">Media</Link>
                    <HashLink to="/#contact" className="navlinks">Contact</HashLink>
                </div>
            </div>
        )
    }
}


export default Navbar