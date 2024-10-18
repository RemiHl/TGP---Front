import React, { useEffect } from 'react';
import '../style/FloatingBubbles.css';

const FloatingBubbles = () => {
    useEffect(() => {
        const numInitialBubbles = 50; // Nombre initial de bulles
        const bubblesContainer = document.getElementById('bubbles-container');

        // Fonction pour créer une bulle
        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Taille aléatoire entre 10px et 60px
            const size = Math.random() * 50 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Position horizontale aléatoire
            bubble.style.left = `${Math.random() * 100}vw`;

            // Durée d'animation aléatoire entre 5s et 15s
            const duration = Math.random() * 10 + 5;
            bubble.style.animationDuration = `${duration}s`;

            // Délai d'animation aléatoire entre 0s et 10s
            const delay = Math.random() * 10;
            bubble.style.animationDelay = `${delay}s`;

            bubblesContainer.appendChild(bubble);

            // Supprimer la bulle après l'animation
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        };

        // Créer les bulles initiales
        for (let i = 0; i < numInitialBubbles; i++) {
            createBubble();
        }

        // Créer de nouvelles bulles à intervalles réguliers
        const interval = setInterval(createBubble, 500); // Toutes les 3 secondes

        // Nettoyage lors du démontage du composant
        return () => clearInterval(interval);
    }, []);

    return <div id="bubbles-container"></div>;
};

export default FloatingBubbles;