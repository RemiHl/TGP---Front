import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/road.jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');
    const navigate = useNavigate();

    const sanitizeInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

    // Récupérer le CSRF au montage
    useEffect(() => {
        fetch('http://localhost:8000/api/login/csrf-token', {
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

    const handleLogin = async (e) => {
        e.preventDefault();

        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPassword = sanitizeInput(password);

        try {
            const response = await fetch('http://localhost:8000/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: sanitizedEmail,
                    password: sanitizedPassword,
                    _csrf_token: csrfToken,
                }),
                credentials: 'include', 
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);

                const decodedToken = jwt_decode(data.token);

                if (decodedToken.roles && decodedToken.roles.includes('ROLE_ADMIN')) {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                setErrorMessage('Identifiants incorrects');
            }
        } catch (error) {
            setErrorMessage('Erreur réseau');
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
                    <p>Connectez-vous pour découvrir des trajets incroyables.</p>
                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="login-btn">Connexion</button>
                    </form>
                    {message && <p>{message}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="login-footer">
                        <p>Pas encore inscrit ? <a href="/signup">Créer un compte</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;