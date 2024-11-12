import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Header.css';
import logo from '../assets/logo.png';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true); 
        }

        // Animation header
        const animateHeader = () => {
            const headerElement = document.querySelector('header');
            let position = -100;
            let opacity = 0;

            const slideInHeader = () => {
                if (position < 0) {
                    position += 2;
                    opacity += 0.05;
                    headerElement.style.transform = `translateY(${position}px)`;
                    headerElement.style.opacity = opacity;
                    requestAnimationFrame(slideInHeader);
                }
            };

            requestAnimationFrame(slideInHeader);
        };

        animateHeader();
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <img src={logo} alt="logo TGP" className="logo" />
            <div className="burger-menu" onClick={toggleMenu}>
                &#9776; {/* Icone du burger */}
            </div>
            <nav>
                <ul className={menuOpen ? 'active' : ''}> {/* Ajout de la classe active si menu ouvert */}
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/infos" onClick={() => setMenuOpen(false)}>A propos</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    </li>
                    {!isLoggedIn && (
                        <>
                            <li>
                                <Link to="/login" onClick={() => setMenuOpen(false)}>Connexion</Link>
                            </li>
                            <li>
                                <Link to="/signup" onClick={() => setMenuOpen(false)}>Inscription</Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                            </li>
                            <li>
                                <Link to="/devis" onClick={() => setMenuOpen(false)}>Devis</Link>
                            </li>
                            <li>
                                <Link to="/account" onClick={() => setMenuOpen(false)}>Mon compte</Link>
                            </li>
                            <li>
                                <button className="logout-btn" onClick={handleLogout}>Se déconnecter</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;