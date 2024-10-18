import React, { useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import '../style/ServicePage.css';
import roadImage from '../assets/camion2.jpg';
import planeImage from '../assets/avion.jpg';
import seaImage from '../assets/bateau2.jpg';
import trainImage from '../assets/trains.jpg';
import douaneImage from '../assets/douane.webp';
import serviceImage from '../assets/contrat.jpg';
import { initScrollReveal } from '../js/scrollReveal';

function Services() {
    useEffect(() => {
        initScrollReveal();
    }, []);
    return (
        <div className="services-page">
            <div className="services-image-container">
                <img src={serviceImage} alt="Services background" className="services-background-image" loading="lazy" />
            </div>
            <div className="home-service-title-container">
                <h1 className="home-service-title">Services</h1>
            </div>
            <div className="services-title-container reveal-on-scroll">
            <h2>Nos Services</h2>
            </div>
            <div className="services-list reveal-on-scroll">
                <ServiceCard
                    title="Transport Routier" 
                    description="Transport sécurisé de vos marchandises par la route."
                    cardBackground={roadImage}
                />
                <ServiceCard 
                    title="Transport Aérien" 
                    description="Expéditions rapides par avion vers les destinations mondiales."
                    cardBackground={planeImage}
                />
                <ServiceCard 
                    title="Transport Maritime" 
                    description="Transport maritime avec des solutions logistiques adaptées." 
                    cardBackground={seaImage}
                />
                <ServiceCard
                    title="Transport ferroviaire" 
                    description="Transport ferroviaire avec des solutions logistiques adaptées." 
                    cardBackground={trainImage}
                />
                <ServiceCard
                    title="Douane"
                    description="Prise en charge de la gestion des services douaniers."
                    cardBackground={douaneImage}
                />
            </div>
        </div>
    );
}

export default Services;