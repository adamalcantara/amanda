import React, { Component } from 'react'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


export default Navbar