import React from 'react';
import '../css/Maserati.css';
import maserati from '../images/Maserati/maserati.jpg';
import mas1 from '../images/Maserati/mas1.jpg';
import mas2 from '../images/Maserati/mas2.jpg';
import mas3 from '../images/Maserati/mas3.jpg';
import mas4 from '../images/Maserati/mas4.jpg';
import mas5 from '../images/Maserati/mas5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header-mas" src={maserati} alt="maserati" />
      <div className="txt-mas">GHIBLI</div>
      <div className="subtxt">The Art of Fast</div>

      <h1 className="discover">DISCOVER THE GHIBLI</h1>
      <img className="mas1" src={mas1} alt="mas1"></img>
      <div
        className="mas-txt"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <h2>DEFY THE ORDINARY</h2>
        <p>
          Experience something truly unique in a world of standardized choices.
        </p>
      </div>

      <img className="mas2" src={mas2} alt="mas2"></img>
      <div
        className="mas-txt"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <h2>LEAD WITH ATTITUDE</h2>
        <p>Assert your audacious presence.</p>
      </div>

      <img className="mas3" src={mas3} alt="mas3"></img>
      <div
        className="mas-txt"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <h2>EVERYDAY EXCITEMENT</h2>
        <p>Inspirational motoring becomes an everyday special experience.</p>
      </div>

      <div className="div1-mas">
        <div className="div1-mas-txt">
          <h1>SAFETY & ADAS</h1>
          <p>
            We made safety a top priority when designing the Ghibli. The Ghibli
            is equipped with a comprehensive range of Level 2 Advanced Driving
            Assistance Systems - including the new Traffic Jam Assist* - for
            greater peace of mind, whether you’re on an exclusive grand tour or
            a dash through the city.
          </p>
          <p>
            *Traffic Jam Assist requires the driver to keep his or her hands on
            the steering wheel at all times. This system is a driver’s
            convenience system, not a substitute for active driver involvement.
            The driver must remain aware of traffic conditions and maintain
            control of the vehicle.
          </p>
        </div>
        <img
          className="mas4"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          src={mas4}
          alt="mas4"
        ></img>
      </div>

      <div className="div2-mas">
        <div className="div2-mas-txt">
          <h1>ACCESSORIES</h1>
          <p>
            Maserati Genuine Accessories offer the perfect combination of
            exclusive design and exceptional functionality. The attention to
            detail, style and quality of each accessory reveals the very essence
            of the Maserati brand. The range includes exclusive wheels and
            tires, transport and luggage solutions, protection and care
            features, and safety equipment.
          </p>
        </div>
        <img
          className="mas5"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          src={mas5}
          alt="mas5"
        ></img>
      </div>
    </>
  );
};

export default Main;
