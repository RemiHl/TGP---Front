import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token'); // Vérifiez si l'utilisateur est authentifié

    if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié
        return <Navigate to="/not-authorized" />;
    }

  // Si l'utilisateur est authentifié
    return children;
}

export default PrivateRoute;