import React, { useEffect } from 'react';
import '../../style/Nous.css';
import fonctionnementImage from '../../assets/commission.jpg'; // Image à utiliser
import { FaBox, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { initScrollReveal } from '../../js/scrollReveal';

function Nous() {
    useEffect(() => {
        initScrollReveal();
    }, []);
    return (
        <div className="nous-section">
            <h2 className="nous-title reveal-on-scroll">Notre fonctionnement</h2>
            <div className="nous-content reveal-on-scroll">
                <div className="nous-image-container">
                    <img src={fonctionnementImage} alt="Fonctionnement" className="nous-image" />
                </div>
                <div className="nous-text-container">
                    <div className="nous-item reveal-on-scroll">
                        <FaBox className="nous-icon" />
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut.</p>
                    </div>
                    <div className="nous-item reveal-on-scroll">
                        <FaShieldAlt className="nous-icon" />
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut.</p>
                    </div>
                    <div className="nous-item reveal-on-scroll">
                        <FaLeaf className="nous-icon" />
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nous;