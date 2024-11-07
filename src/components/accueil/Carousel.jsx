import React, { useEffect, useState } from 'react';
import '../../style/Carousel.css'; // Assurez-vous que ce chemin est correct
import bateau2 from '../../assets/bateau2.jpg';
import camion2 from '../../assets/camion2.jpg';
import douane from '../../assets/douane.webp';
import train from '../../assets/trains.jpg';
import avion from '../../assets/avion.jpg';
import { initScrollReveal } from '../../js/scrollReveal';

function Carousel() {
    // Transformez le tableau d'images en un tableau d'objets avec image et titre
    const slides = [
        { image: avion, title: 'Transport Aérien' },
        { image: bateau2, title: 'Transport Maritime' },
        { image: camion2, title: 'Transport Routier' },
        { image: train, title: 'Transport Ferroviaire' },
        { image: douane, title: 'Services Douaniers' },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(interval);
            initScrollReveal();
        };
    }, [slides.length]);

    return (
        <>
            <div className="carousel-text reveal-on-scroll">
                <h2>Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptas in distinctio possimus iusto nobis error. 
                    Nesciunt optio eum ducimus fuga quos, explicabo facilis soluta, ipsa, sint eveniet voluptatibus aperiam enim.
                </p>
            </div>
            <div className="carousel-container reveal-on-scroll">
                <div className="carousel-image-container reveal-on-scroll">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={`carousel-${index}`}
                            className={`carousel-image ${index === currentSlideIndex ? 'active' : ''}`}
                            loading="lazy"
                        />
                    ))}
                </div>
                <div className="carousel-controls">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-dot ${index === currentSlideIndex ? 'active' : ''}`}
                            onClick={() => setCurrentSlideIndex(index)}
                        />
                    ))}
                </div>
                {/* Afficher le titre de la diapositive actuelle */}
                <div className="carousel-title">
                    <h3>{slides[currentSlideIndex].title}</h3>
                </div>
            </div>
        </>
    );
}

export default Carousel;