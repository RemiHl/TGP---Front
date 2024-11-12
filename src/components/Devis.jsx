import React, { useState, useEffect } from 'react';
import '../style/Devis.css';
import devisBackgroundImage from '../assets/conference.webp'; 

function DevisPage() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        entreprise: '',
        localisation: ''
    });

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/services');
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Erreur lors du chargement des services', error);
            }
        };

        fetchServices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const devisData = {
            ...formData,
            services: [selectedService]
        };

        try {
            const response = await fetch('http://localhost:8000/api/devis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(devisData),
            });

            if (response.ok) {
                alert('Devis envoyé avec succès !');
            } else {
                alert('Erreur lors de l\'envoi du devis.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du devis', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    return (
        <div className="devis-background" style={{ backgroundImage: `url(${devisBackgroundImage})` }}>
            <div className="devis-form-container">
                <form onSubmit={handleSubmit} className="devis-form-box fade-in">
                    <h2>Demandez un Devis</h2>

                    <div className="form-row">
                        <div>
                            <label>Nom:</label>
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Prénom:</label>
                            <input
                                type="text"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Entreprise:</label>
                            <input
                                type="text"
                                name="entreprise"
                                value={formData.entreprise}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Localisation:</label>
                        <input
                            type="text"
                            name="localisation"
                            value={formData.localisation}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="select-container">
                        <label>Choisissez un service :</label>
                        <select value={selectedService} onChange={handleServiceChange} required>
                            <option value="">-- Sélectionnez un service --</option>
                            {services.map(service => (
                                <option key={service.id} value={service.id}>
                                    {service.nom}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit">Envoyer le devis</button>
                </form>
            </div>
        </div>
    );
}

export default DevisPage;