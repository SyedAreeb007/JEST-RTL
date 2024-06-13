import React from 'react';
import './Footer.css'; // Import the custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        Welcome to Cloth's, your one-stop destination for all your clothing needs.
                        Our mission is to provide high-quality clothing that meets your
                        style and budget requirements.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> +92-312-1043893</span>
                        <span><i className="fas fa-envelope"></i> syedareeb445@gmail.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Deals</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 CLOTH'S | Designed by Areeb.
            </div>
        </footer>
    );
};

export default Footer;
