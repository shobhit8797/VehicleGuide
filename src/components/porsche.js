import React from 'react';
import '../css/porsche.css';
import porsche from '../images/porsche/porsche.jpg';
import porsche2 from '../images/porsche/porsche2.jpg';
import por1 from '../images/porsche/por1.jpg';
import por2 from '../images/porsche/por2.jpg';
import por3 from '../images/porsche/por3.jpg';
import porsche3 from '../images/porsche/porsche3.jpg';
import porsche4 from '../images/porsche/porsche4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header-rolls" src={porsche} alt="phantom" />
      <h1 className="brand-dawn" style={{ left: '18%' }}>
        PORSCHE 911
      </h1>

      <div className="text">
        A timeless design, a contemporary interpretation. The unmistakable
        silhouette of the 911 is characterized by its iconic flyline. It has
        barely changed since 1963, and has shaped the DNA of all Porsche models.
        Including, of course, the 911 Cabriolet and Targa models.
      </div>
      <img className="ph1" src={porsche2} alt="phantom" />
      <div className="slider">
        <div className="text">
          <h4>Maintain the Comfort</h4>
          <br></br>
          Power athlete. Design icon. Everyday hero. The 911 combines the power
          of a sports car with great interior comfort<br></br>and the latest
          technology to make your everyday life easier.
        </div>
        <img className="ph2" data-aos="zoom-in-right" src={por1} alt="ph2" />
        <img className="ph3" data-aos="zoom-in" src={por3} alt="ph3" />
        <img className="ph4" data-aos="zoom-in-left" src={por2} alt="ph4" />

        <div className="text">
          Numerous assistance systems, such as Porsche InnoDrive and Remote
          ParkAssist, provide support while driving and during everyday life.
        </div>

        <img
          data-aos="zoom-in"
          className="phantom2"
          src={porsche3}
          alt="phantom2"
        />
      </div>

      <div className="footer">
        <div className="text">
          <h1>MAKE YOUR OWN RULES</h1>
          <br></br>
          Savour the rough with the smooth. Engineering and technology perform
          in harmonious collaboration,<br></br>
          insulating from even the most challenging road conditions. Delivering
          a magnificently graceful drive for<br></br>
          you to test the limits of your fearlessness.
        </div>
        <img className="phantom3" src={porsche4} alt="phhantom3" />
      </div>
    </>
  );
};

export default Main;
