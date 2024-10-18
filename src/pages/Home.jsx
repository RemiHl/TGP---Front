import React from 'react';
import Accueil from '../components/accueil/Accueil';
import About from '../components/accueil/About';
import Carousel from '../components/accueil/Carousel';

function Home() {
    return (
        <div>
            <Accueil />
            <About />
            <Carousel />
        </div>
    );
}

export default Home;