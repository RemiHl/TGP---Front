import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaTimes } from 'react-icons/fa';
import '../style/Footer.css';
import logo from '../assets/logo.png';
import { initScrollReveal } from '../js/scrollReveal';

function Footer() {
    useEffect(() => {
        initScrollReveal();
    }, []);
    return (
        <footer className="footer-container reveal-on-scroll">
            <div className="footer-top">
            <div className="footer-logo">
                <img src={logo} alt="T.G.P Logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur. 
                    Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. 
                    Ut ac luctus facilisis ipsum mauris volutpat elementum ut.
                </p>
            </div>
            <div className="footer-links">
                <h3>Accueil</h3>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/infos">A propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/devis">Devis</a></li>
                    <li><a href="/rgpd">Politique de protection des données</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p><FaPhone /> +337.55-55-55-55</p>
                <p><FaEnvelope /> Contact@gmail.com</p>
            </div>
            </div>
            <div className="footer-social">
                <h3>&copy; 2024 | T.G.P Transport Global Priem</h3>
                <div className="social-icons">
                    <a className="linkedin-icon" href="#"><FaLinkedin /></a>
                    <a className="x-icon" href="#"><FaTimes /></a>
                    <a className="facebook-icon" href="#"><FaFacebook /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;