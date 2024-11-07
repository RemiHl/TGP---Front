import React, { useEffect } from 'react';
import '../style/Services.css';

function ServiceCard({ title, description, cardBackground }) {
    useEffect(() => {
        const cards = document.querySelectorAll('.service-card');

        cards.forEach(card => {
            const textElement = card.querySelector('.service-description');

            card.addEventListener('mouseenter', () => {
                textElement.style.transform = 'translateY(0)';
                textElement.style.opacity = '1';
            });

            card.addEventListener('mouseleave', () => {
                textElement.style.transform = 'translateY(100%)';
                textElement.style.opacity = '0';
            });
        });
    }, []);

    return (
        <div className="service-card" 
            style={{ backgroundImage: `url(${cardBackground})` }}>
            <div className="overlay"></div> {/* Overlay pour le texte */}
            <h3 className="service-title reveal-on-scroll">{title}</h3>
            <p className="service-description">{description}</p>
        </div>
    );
}

export default ServiceCard;