import React, { useEffect } from 'react';
import backgroundImage from '../../assets/home.png';
import '../../style/Accueil.css';

function Accueil() {
    useEffect(() => {
        const slideInImageAndTitle = () => {
            const imageElement = document.querySelector('.home-image');
            const titleElement = document.querySelector('.home-title');
            let position = 100; 
            let opacity = 0; 

            const animate = () => {
                if (position > 0) {
                    position -= 2; // Réduire la position de l'image
                    opacity += 0.05; // Augmenter progressivement l'opacité
                    imageElement.style.transform = `translateX(${position}%)`;
                    titleElement.style.opacity = opacity;

                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };
        slideInImageAndTitle();
    }, []);

    return (
        <section className="accueil">
            <div className="home-image-container">
                <img src={backgroundImage} alt="Accueil" className="home-image" loading="lazy" />
            </div>
            <div className="home-title-container">
                <h1 className="home-title">La solution <br /> pour vos transports</h1>
            </div>
        </section>
    );
}

export default Accueil;