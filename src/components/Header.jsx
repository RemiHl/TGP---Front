import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Importation de useLocation
import '../style/Header.css';
import logo from '../assets/logo.png';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation(); // Utilisation du hook useLocation pour détecter les changements de route

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true); // Si token trouvé, utilisateur connecté
        }

        // Fonction d'animation pour faire glisser le header du haut à chaque changement de route
        const animateHeader = () => {
            const headerElement = document.querySelector('header');
            let position = -100; // Commence en dehors de l'écran (haut)
            let opacity = 0; // Opacité initiale à 0

            const slideInHeader = () => {
                if (position < 0) {
                    position += 2; // Fait glisser le header vers le bas
                    opacity += 0.05; // Augmente progressivement l'opacité
                    headerElement.style.transform = `translateY(${position}px)`;
                    headerElement.style.opacity = opacity;
                    requestAnimationFrame(slideInHeader);
                }
            };

            requestAnimationFrame(slideInHeader);
        };

        animateHeader(); // Démarrer l'animation
    }, [location]); // Refaire l'animation à chaque changement de route (dépendance sur location)

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <header>
            <img src={logo} alt="logo TGP" className="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/infos">A propos</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    {!isLoggedIn && (
                        <>
                            <li>
                                <Link to="/login">Connexion</Link>
                            </li>
                            <li>
                                <Link to="/signup">Inscription</Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/devis">Devis</Link>
                            </li>
                            <li>
                                <Link to="/account">Mon compte</Link>
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