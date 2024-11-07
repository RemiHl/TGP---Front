import React, { useEffect } from 'react';
import '../style/FloatingBubbles.css';

const FloatingBubbles = () => {
    useEffect(() => {
        const numInitialBubbles = 40; // Nombre initial de bulles
        const bubblesContainer = document.getElementById('bubbles-container');

        // créer une bulle
        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Taille aléatoire
            const size = Math.random() * 50 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Position aléatoire
            bubble.style.left = `${Math.random() * 100}vw`;

            // Durée animation aléatoire
            const duration = Math.random() * 10 + 5;
            bubble.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 10;
            bubble.style.animationDelay = `${delay}s`;

            bubblesContainer.appendChild(bubble);

            // Supprimer la bulle 
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        };

        // Créer les bulles initiales
        for (let i = 0; i < numInitialBubbles; i++) {
            createBubble();
        }

        // Créer à intervalles réguliers
        const interval = setInterval(createBubble, 500); // Toutes les 3 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="bubbles-container"></div>
    );
};

export default FloatingBubbles;