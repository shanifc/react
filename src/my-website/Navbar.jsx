import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">MyShop</h1>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;