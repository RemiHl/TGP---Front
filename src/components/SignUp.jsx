import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SignUp.css';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/road.jpg';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Regex 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // nettoyage des entrées
    const sanitizeInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Réinitialiser les messages
        setMessage('');

        // Validation de l'email
        if (!emailRegex.test(email)) {
            setMessage('Veuillez entrer un email valide.');
            return;
        }

        // Vérifier si les mots de passe correspondent
        if (password !== confirmPassword) {
            setMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        // Valider le mot de passe avec la regex
        if (!passwordRegex.test(password)) {
            setMessage('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
            return;
        }

        // Sanitisation des entrées
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPassword = sanitizeInput(password);

        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: sanitizedEmail, password: sanitizedPassword }),
            });

            if (response.ok) {
                const data = await response.json(); // Récupération de la réponse JSON
                localStorage.setItem('token', data.token); // Stockage du token JWT
                setMessage('Inscription réussie !');
                
                // Rediriger vers la page de connexion après une inscription réussie
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Erreur lors de l’inscription.');
            }
        } catch (error) {
            setMessage('Erreur réseau.');
        }
    };

    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-box">
                <div className="login-header">
                    <img src={logo} alt="logo TGP" className="login-logo" />
                </div>
                <div className="login-content">
                    <h2>Bienvenue Voyageur !</h2>
                    <p>Inscrivez-vous pour avoir accès à tous les services.</p>
                    <form onSubmit={handleSignUp}>
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mot de passe"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirmer le mot de passe"
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">S'inscrire</button>
                    </form>
                    {message && <p className={`message ${message.includes('Erreur') || message.includes('ne correspondent pas') ? 'error' : 'success'}`}>{message}</p>}
                    <div className="login-footer">
                        <p>Déjà inscrit ? <a href="/login">Se connecter</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;