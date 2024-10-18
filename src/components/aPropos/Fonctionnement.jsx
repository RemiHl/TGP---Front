import React from 'react';
import '../../style/APropos.css';
import fonctionnementImage from '../../assets/bureau2.jpg';

function Fonctionnement() {
    return (
        <div className="fonctionnement-container">
            <div className="fonctionnement-image-container">
                <img src={fonctionnementImage} alt="Immeuble" className="fonctionnement-image" loading="lazy" />
            </div>
            <div className="fonctionnement-text-container">
                <h1 className="fonctionnement-title">A propos de nous</h1>
            </div>
        </div>
    );
}

export default Fonctionnement;