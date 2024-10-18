import React, { useEffect } from 'react';
import '../../style/Pourquoi.css';
import { initScrollReveal } from '../../js/scrollReveal';

function Pourquoi() {
    useEffect(() => {
        initScrollReveal();
    }, []);
    return (
        <div className="pourquoi-nous-section">
            <h2 className="pourquoi-nous-title reveal-on-scroll">Pourquoi nous choisir ?</h2>
            <div className="pourquoi-nous-content reveal-on-scroll">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut. Volutpat nullam tellus egestas scelerisque tellus.</p>
                <p>Id pellentesque eget sollicitudin quis morbi arcu. Id etiam sed dui tellus purus morbi aenean. Quis non non massa ut amet. Nec id sed ullamcorper tincidunt egestas sit. Ac elementum in justo feugiat netus suspendisse molestie. Tortor eget mattis aliquet at nunc elementum ornare aliquet placerat.</p>
            </div>
        </div>
    );
}

export default Pourquoi;