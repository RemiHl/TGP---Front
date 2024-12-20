import React, { useState, useEffect } from 'react';
import '../style/Contact.css';
import contactBackgroundImage from '../assets/conference.webp';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');

    // Récupérer le CSRF au montage
    useEffect(() => {
        fetch('http://localhost:8000/api/contact/csrf-token', {
            credentials: 'include', 
        })
            .then(response => response.json())
            .then(data => {
                setCsrfToken(data.csrfToken);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du token CSRF :', error);
            });
    }, []);

    const sanitizeInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

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
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    email: sanitizeEmail,
                    message: sanitizeMessage,
                    _csrf_token: csrfToken,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                setEmail('');
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
                <div className="contact-form-box fade-in" style={{ transform: 'translateX(0%)', opacity: 1 }}>
                    <h2>Contactez-nous</h2>
                    <p>N'hésitez pas à nous contacter !</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                className="contact-form-input"
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
                        {/* Champ caché pour CSRF */}
                        <input type="hidden" name="_csrf_token" value={csrfToken} />
                        <button type="submit">Envoyer</button>
                    </form>
                    {responseMessage && <p className="response-message">{responseMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default ContactForm;