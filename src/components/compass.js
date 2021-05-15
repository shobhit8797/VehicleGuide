import React from 'react';
import '../css/compass.css';
import compass from '../images/compass/compass.jpg';
import comp1 from '../images/compass/comp1.jpg';
import comp2 from '../images/compass/comp2.jpeg';
import comp3 from '../images/compass/comp3.jpeg';
import compass2 from '../images/compass/compass2.jpg';
import compass3 from '../images/compass/compass3.jpg';
import compass4 from '../images/compass/compass4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header-rolls" src={compass} alt="phantom" />
      <h1 className="brand-dawn" style={{ fontSize: '6rem', left: '19%' }}>
        JEEP COMPASS
      </h1>

      <div className="text">
        So reinvent the wheel. Disrupt the norms.<br></br>
        Rip up the rule book. Jeep Compass will be there for the ride.
      </div>
      <img className="ph1" src={compass2} alt="phantom" />
      <div className="slider">
        <div className="text">
          <h4>Maintain the correct image expected of your jeep compass</h4>
          <br></br>
          In a world that tells you what to do, follow your instincts.Jeep
          Compass allows you to customise your<br></br> SUV to suit your
          personal preferences whether that’s transporting your most prized
          possession…
        </div>
        <img className="ph2" data-aos="zoom-in-right" src={comp1} alt="ph2" />
        <img className="ph3" data-aos="zoom-in" src={comp2} alt="ph3" />
        <img className="ph4" data-aos="zoom-in-left" src={comp3} alt="ph4" />

        <div className="text">
          …or adding another essential component you’ve envisioned.<br></br>
          Journey to the far reaches of your imagination.
        </div>

        <img
          data-aos="zoom-in"
          className="phantom2"
          src={compass3}
          alt="phantom2"
        />
      </div>

      <div className="footer">
        <div className="text">
          <h1>MAKE YOUR OWN RULES</h1>
          <br></br>
          Savour the rough with the smooth. Engineering and technology perform
          in harmonious collaboration,<br></br>
          insulating from even the most challenging road conditions. The SUV is
          priced from Rs 16.99 lakh to Rs 28.29 lakh<br></br>
          You can have the facelifted Compass in four trims: Sport, Longitude
          (O), Limited (O), and Model S.
        </div>

        <img className="phantom3" src={compass4} alt="phhantom3" />
      </div>
    </>
  );
};

export default Main;
