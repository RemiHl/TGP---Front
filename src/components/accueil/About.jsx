import React, { useEffect } from 'react';
import '../../style/About.css';
import { IoBoat } from "react-icons/io5";
import { FaPlane } from "react-icons/fa6";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaTruck } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiBoatFill } from "react-icons/pi";
import { IoMdTrain } from "react-icons/io";
import logo from '../../assets/logo.png';
import { initScrollReveal } from '../../js/scrollReveal';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    useEffect(() => {
        initScrollReveal();
    }, []);

    const handleRedirect = () => {
        navigate('/infos'); // Redirige vers la page /infos
    };

    return (
        <div className="about reveal-on-scroll">
            <div className="about-text reveal-on-scroll">
                <h2>Qui sommes-nous</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio nam nobis dignissimos libero saepe blanditiis mollitia iusto necessitatibus velit, 
                nihil, neque, assumenda qui ullam soluta quisquam possimus non cupiditate corrupti?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio nam nobis dignissimos libero saepe blanditiis mollitia iusto necessitatibus velit, 
                nihil, neque, assumenda qui ullam soluta quisquam possimus non cupiditate corrupti?
                </p>
                <button className="more-btn reveal-on-scroll" onClick={handleRedirect}>
                    En savoir plus
                </button>
            </div>
            <div className="circle-container reveal-on-scroll">
                <div className="center-logo">
                    <img src={logo} alt="T.G.P"/>
                </div>

                <div className="circle outer-circle">
                    <div className="icon"><FaPlane /></div>
                    <div className="icon"><GiPoliceOfficerHead /></div>
                    <div className="icon"><PiBoatFill /></div>
                    <div className="icon"><IoMdTrain /></div>
                </div>

                <div className="circle inner-circle">
                    <div className="icon"><IoBoat /></div>
                    <div className="icon"><FaTruck /></div>
                    <div className="icon"><FaUser /></div>
                </div>
            </div>
        </div>
    );
}

export default About;