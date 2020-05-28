import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navBar">
            <h2><NavLink exact to="/">HOME</NavLink></h2>
        </div>
    )
}

export default Navbar
