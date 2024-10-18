import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/road.jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Fonction nettoyage des entrées
    const sanitizeInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Nettoyage des entrées utilisateur
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPassword = sanitizeInput(password);

        try {
            const response = await fetch('http://localhost:8000/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: sanitizedEmail, password: sanitizedPassword }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); // Stockage du token JWT

                // Décoder le token pour vérifier les rôles
                const decodedToken = jwt_decode(data.token);

                // Vérifier si l'utilisateur a le rôle ADMIN
                if (decodedToken.roles && decodedToken.roles.includes('ROLE_ADMIN')) {
                    navigate('/admin'); // Rediriger vers le dashboard admin
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
                    <div className="login-footer">
                        <p>Pas encore inscrit ? <a href="/signup">Créer un compte</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;