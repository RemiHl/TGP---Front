import React, { useState, useEffect } from 'react';
import '../style/Contact.css';
import contactBackgroundImage from '../assets/conference.webp';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // Animation JavaScript
    useEffect(() => {
        const slideInForm = () => {
            const formElement = document.querySelector('.contact-form-box');
            let position = 100;
            let opacity = 0;

            const animate = () => {
                if (position > 0) {
                    position -= 2;
                    opacity += 0.05;
                    formElement.style.transform = `translateX(${position}%)`;
                    formElement.style.opacity = opacity;

                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };
        slideInForm();
    }, []);

    const sanitizeInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    //logique
    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        const sanitizeEmail = sanitizeInput(email);
        const sanitizeMessage = sanitizeInput(message);

        try {
            const response = await fetch('http://localhost:8000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Ajouter le token JWT dans l'en-tête
                },
                body: JSON.stringify({ email: sanitizeEmail, message: sanitizeMessage }),
            });

            if (response.ok) {
                setEmail(''); // Réinitialiser les champ 
                setMessage('');
                setResponseMessage('Votre message a été envoyé avec succès.');
            } else {
                setResponseMessage('Erreur lors de l\'envoi du message.');
            }
        } catch (error) {
            setResponseMessage('Erreur réseau.');
        }
    };

    return (
    <div className="contact-background" style={{ backgroundImage: `url(${contactBackgroundImage})` }}>
        <div className="contact-form-container">
            <div className="contact-form-box" style={{ transform: 'translateX(100%)', opacity: 0 }}>
                <h2>Contactez-nous</h2>
                <p>N'hésitez pas à nous contacter !</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input className="contact-form-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>
        </div>
    </div>
    );
}

export default ContactForm;