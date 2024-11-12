import React, { useEffect } from 'react';
import '../style/FloatingBubbles.css';

const FloatingBubbles = () => {
    useEffect(() => {
        const numInitialBubbles = 40;
        const bubblesContainer = document.getElementById('bubbles-container');

        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            const size = Math.random() * 50 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            bubble.style.left = `${Math.random() * 100}vw`;

            const duration = Math.random() * 10 + 5;
            bubble.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 10;
            bubble.style.animationDelay = `${delay}s`;

            bubblesContainer.appendChild(bubble);

            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        };

        for (let i = 0; i < numInitialBubbles; i++) {
            createBubble();
        }

        const interval = setInterval(createBubble, 500);  // 3s

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="bubbles-container"></div>
    );
};

export default FloatingBubbles;