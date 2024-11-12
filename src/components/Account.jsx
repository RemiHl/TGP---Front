import React, { useState } from 'react';
import '../style/Account.css';

function Account() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:8000/api/users/change_password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            });

            if (response.ok) {
                setMessage('Mot de passe modifié avec succès');
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:8000/api/users/delete_account', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Compte supprimé avec succès');
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                setMessage(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    return (
        <div className="background">
        <div className="account-container">
            <h2 className="account-title-page">Mon compte</h2>
            <h3 className="account-title">Modifier mon mot de passe</h3>
            <form onSubmit={handlePasswordChange} className="account-form">
                <input
                    type="password"
                    placeholder="Mot de passe actuel"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="account-input"
                    required
                />
                <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="account-input"
                    required
                />
                <button type="submit" className="account-button">Modifier le mot de passe</button>
            </form>

            <button onClick={handleDeleteAccount} className="delete-account-button">
                Supprimer mon compte
            </button>

            {message && <p className="account-message">{message}</p>}
        </div>
        </div>
    );
}

export default Account;