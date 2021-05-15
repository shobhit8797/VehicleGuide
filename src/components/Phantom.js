import React from 'react';
import '../css/Phantom.css';
import phantom from '../images/phantom/phantom.png';
import ph1 from '../images/phantom/ph1.jpg';
import ph2 from '../images/phantom/ph2.jpg';
import ph3 from '../images/phantom/ph3.jpg';
import ph4 from '../images/phantom/ph4.jpg';
import phantom2 from '../images/phantom/phantom2.png';
import phantom3 from '../images/phantom/phantom3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main=() =>{
    AOS.init({duration: 2000});
    return(
        <>
            <img className="header-rolls" src={phantom} alt="phantom" />
            <h1 className="brand">PHANTOM</h1>

            <div className="text">So reinvent the wheel. Disrupt the norms.<br></br>
             Rip up the rule book. Phantom will be there for the ride.</div>
             <img className="ph1" src={ph1} alt="phantom"/>
            <div className="slider">
                <div className="text">
                    <h4>Maintain the correct image expected of your Phantom</h4>
                    <br></br>
                        In a world that tells you what to do, follow your instincts. Rolls‑Royce allows you to customise your<br></br> Phantom to suit your personal preferences whether that’s transporting your most prized possession…
                </div>
                <img className="ph2" data-aos="zoom-in-right" src={ph2} alt="ph2" />
                <img className="ph3" data-aos="zoom-in" src={ph3} alt="ph3" />
                <img className="ph4" data-aos="zoom-in-left" src={ph4} alt="ph4" />

                <div className="text">…or adding another essential component you’ve envisioned.<br></br>
                Journey to the far reaches of your imagination.</div>

                <img data-aos="zoom-in" className="phantom2" src={phantom2} alt="phantom2"/>
            </div>

            <div className="footer">
            <div className="text">
                <h1>MAKE YOUR OWN RULES</h1>
                <br></br>
                Savour the rough with the smooth. Engineering and technology perform in harmonious collaboration,<br></br>
                insulating from even the most challenging road conditions. Delivering a magnificently graceful drive for<br></br>
                you to test the limits of your fearlessness.
            </div>
            <img className="phantom3" src={phantom3} alt="phhantom3" />
            </div>
        </>
    )
}

export default Main;