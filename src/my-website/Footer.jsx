import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} MyShop. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Help</a>
            </div>
        </footer>
    );
}

export default Footer;