import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AdminDashboard.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newEmail, setNewEmail] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTokenAndUsers = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedToken = jwt_decode(token);
                    if (!decodedToken.roles.includes('ROLE_ADMIN')) {
                        navigate('/not-authorized');
                    } else {
                        fetchUsers(token);
                        fetchMessages(token);
                    }
                } catch (error) {
                    console.error('Erreur lors du décodage token:', error);
                    navigate('/login');
                }
            } else {
                navigate('/login');
            }
        };

        fetchTokenAndUsers();
    }, [navigate]);

    const fetchUsers = async (token) => {
        try {
            const response = await fetch('http://localhost:8000/api/admin/users', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setMessage('Erreur lors du chargement des utilisateurs.');
        }
    };

    const handleDelete = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Utilisateur supprimé avec succès');
                fetchUsers(token);
            } else {
                setMessage(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    // Modifier l'email 
    const selectedUser = users.find((user) => user.id === selectedUserId);
    const handleUpdateEmail = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: newEmail }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Email modifié avec succès');
                setNewEmail('');
                fetchUsers(token);
            } else {
                setMessage(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    // Ajouter un nouvel utilisateur
    const handleAddUser = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: newUserEmail, password: newUserPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Nouvel utilisateur créé avec succès');
                setNewUserEmail('');
                setNewUserPassword('');
                fetchUsers(token);
            } else {
                setMessage(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    const fetchMessages = async (token) => {
        try {
            const response = await fetch('http://localhost:8000/api/admin/contact', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setMessages(data);
            } else {
                setMessage(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur réseau');
        }
    };

    return (
        <div className="content-container">
            <div className="dashboard-title">
                <h2>Tableau de bord Admin</h2>
            </div>
            {message && <p>{message}</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Rôles</th>
                        <th>Actions</th>
                        <th>Messages</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.roles.join(', ')}</td>
                            <td>
                                <button id="delete_button" onClick={() => handleDelete(user.id)}>Supprimer</button>
                                <button id="modify_button"onClick={() => setSelectedUserId(user.id)}>Modifier Email</button>
                            </td>
                            <td>
                                {messages.filter((message) => message.connectedUser === user.id).map((message) => (
                                    <p key={message.id}>{message.message}</p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulaire modifier e-mail */}
            {selectedUserId && (
                <div className="email-form">
                    <h3>Modifier l'adresse e-mail</h3>
                    <p id="old_email">Ancien email : {selectedUser.email}</p>
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="Nouvel email"
                    />
                    <button id="email_modify_button"onClick={() => handleUpdateEmail(selectedUserId)}>Modifier Email</button>
                </div>
            )}

            {/* Formulaire nouvel utilisateur */}
            <div>
                <div className="dashboard-title2">
                    <h3>Ajouter un nouvel utilisateur</h3>
                </div>
                <input
                    type="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="Email du nouvel utilisateur"
                />
                <input
                    type="password"
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    placeholder="Mot de passe temporaire"
                />
                <button id="add_button" onClick={handleAddUser}>Ajouter Utilisateur</button>
            </div>
        </div>
    );
}

export default AdminDashboard;