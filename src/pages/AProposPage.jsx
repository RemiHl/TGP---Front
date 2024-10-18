import React from 'react';
import Fonctionnement from '../components/aPropos/Fonctionnement';
import Nous from '../components/aPropos/Nous';
import Pourquoi from '../components/aPropos/Pourquoi';

function APropos() {
    return (
        <div className="a-propos-container">
            <Fonctionnement />
            <Nous />
            <Pourquoi />
        </div>
    );
}

export default APropos;