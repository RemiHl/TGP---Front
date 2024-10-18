import React from 'react';
import '../style/NotAuthorized.css';

function NotAuthorizedPage() {
    return (
        <div className="error-page">
            <h1 className="error-title">Error - 404</h1>
            <p className="error-message">An error has occurred, to continue:</p>
            <ul className="error-list">
                <li>Return to homepage.</li>
                <li>OR</li>
                <li>Send an email to an admin about this error.</li>
            </ul>
            <div className="links">
                <a href="/" className="link">Homepage</a>
            </div>
        </div>
    );
}


export default NotAuthorizedPage;