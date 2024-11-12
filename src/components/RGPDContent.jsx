import React from 'react';
import '../style/RGPD.css';

const RGPDContent = () => {
  return (
    <div className="rgpd-page-content">
      <h1 className="rgpd-page-title">Politique de Protection des Données Personnelles</h1>

      <section className="rgpd-section rgpd-section-intro">
        <h2 className="rgpd-section-title">1. Introduction</h2>
        <p className="rgpd-section-text">
          Dans le cadre de notre activité de commissionnaire de transport, nous attachons une importance particulière à la
          protection de vos données personnelles. Conformément au Règlement Général sur la Protection des Données (RGPD), nous
          nous engageons à assurer la sécurité et la confidentialité de vos informations.
        </p>
      </section>

      <section className="rgpd-section rgpd-section-data">
        <h2 className="rgpd-section-title">2. Données collectées et finalités</h2>
        <p className="rgpd-section-text">Nous collectons et traitons uniquement les données nécessaires à notre activité, notamment pour :</p>
        <ul className="rgpd-list">
          <li className="rgpd-list-item">
            <strong>L’inscription et l’accès à notre site</strong> : nous enregistrons votre adresse email pour permettre la connexion
            et la communication avec vous.
          </li>
          <li className="rgpd-list-item">
            <strong>La demande de devis</strong> : nous collectons vos coordonnées (nom, prénom, email, entreprise, localisation)
            pour pouvoir établir une réponse personnalisée.
          </li>
          <li className="rgpd-list-item">
            <strong>Le formulaire de contact</strong> : pour répondre à vos questions et demandes.
          </li>
        </ul>
      </section>

      <section className="rgpd-section rgpd-section-legal">
        <h2 className="rgpd-section-title">3. Base légale des traitements</h2>
        <p className="rgpd-section-text">Le traitement de vos données personnelles repose sur :</p>
        <ul className="rgpd-list">
          <li className="rgpd-list-item"><strong>Le consentement</strong> : pour l’inscription, la demande de devis et le formulaire de contact.</li>
          <li className="rgpd-list-item"><strong>L’exécution contractuelle</strong> : pour vous fournir les services demandés, comme la gestion des demandes de devis.</li>
        </ul>
      </section>

      <section className="rgpd-section rgpd-section-storage">
        <h2 className="rgpd-section-title">4. Conservation des données</h2>
        <p className="rgpd-section-text">
          Les informations personnelles (email) sont conservées pendant toute la durée de votre compte. Elles seront supprimées ou
          anonymisées sur demande, sauf en cas d'obligations légales de conservation.
        </p>
        <p className="rgpd-section-text">
          Les devis et les demandes de contact sont conservés pour une durée maximale de 2 ans afin de
          faciliter notre suivi client.
        </p>
      </section>

      <section className="rgpd-section rgpd-section-access">
        <h2 className="rgpd-section-title">5. Accès aux données</h2>
        <p className="rgpd-section-text">
          Seul l’administrateur de notre plateforme a accès aux informations suivantes : adresses email des utilisateurs, contacts et
          demandes de devis. L’administrateur peut également supprimer ou créer des comptes d’utilisateurs selon les besoins de gestion.
        </p>
        <p className="rgpd-section-text">Les mots de passe sont cryptés et ne sont jamais visibles sous forme claire.</p>
      </section>

      <section className="rgpd-section rgpd-section-rights">
        <h2 className="rgpd-section-title">6. Vos droits</h2>
        <p className="rgpd-section-text">Vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul className="rgpd-list">
          <li className="rgpd-list-item"><strong>Droit d'accès</strong> : obtenir une copie de vos données.</li>
          <li className="rgpd-list-item"><strong>Droit de rectification</strong> : corriger des informations inexactes.</li>
          <li className="rgpd-list-item"><strong>Droit à l’effacement</strong> : demander la suppression de votre compte et de vos données.</li>
          <li className="rgpd-list-item"><strong>Droit à la limitation</strong> : limiter le traitement de vos données dans certains cas.</li>
          <li className="rgpd-list-item"><strong>Droit d’opposition</strong> : vous opposer à certains traitements.</li>
          <li className="rgpd-list-item"><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et les transmettre à un autre prestataire.</li>
        </ul>
        <p className="rgpd-section-text">Pour exercer ces droits, veuillez nous contacter par email à "Contact-TGP@gmail.com".</p>
      </section>

      <section className="rgpd-section rgpd-section-security">
        <h2 className="rgpd-section-title">7. Sécurité des données</h2>
        <p className="rgpd-section-text">
          Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre les accès non autorisés,
          les pertes ou altérations. Les mots de passe sont notamment hashés pour garantir leur confidentialité.
        </p>
      </section>

      <section className="rgpd-section rgpd-section-modification">
        <h2 className="rgpd-section-title">8. Modification de la politique</h2>
        <p className="rgpd-section-text">
          Nous nous réservons le droit de modifier cette politique de confidentialité. Toute modification sera publiée sur cette page.
        </p>
      </section>
    </div>
  );
};

export default RGPDContent;