import React from "react"
import Logo from "../images/world-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo" alt="Logo of world" />
            <h3>my travel journal.</h3>
        </nav>
    )
}