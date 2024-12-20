import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {

        return <Navigate to="/not-authorized" />;
    }

    return children;
}

export default PrivateRoute;