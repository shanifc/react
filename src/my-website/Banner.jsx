import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <h2>Welcome to MyShop</h2>
                <p>Your one-stop shop for everything you love.</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
}

export default Banner;