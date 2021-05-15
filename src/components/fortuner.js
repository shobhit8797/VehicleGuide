import React from 'react';
import '../css/fortuner.css';
import fortuner from '../images/fortuner/fortuner.jpeg';
import fortuner2 from '../images/fortuner/fortuner2.jpg';
import da2 from '../images/Dawn/da2.png';
import fortuner3 from '../images/fortuner/fortuner3.jpg';
import fortuner4 from '../images/fortuner/fortuner4.jpg';
import for1 from '../images/fortuner/for1.jpg';
import da4 from '../images/Dawn/da4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header-rolls" src={fortuner} alt="phantom" />
      <h1 className="brand-dawn">FORTUNER</h1>

      <div className="text">
        So reinvent the wheel. Disrupt the norms.<br></br>
        Rip up the rule book. Fortuner will be there for the ride.
      </div>
      <img className="ph1" src={fortuner2} alt="phantom" />
      <div className="slider">
        <div className="text">
          <h4>Maintain the correct image expected of your Toyota</h4>
          <br></br>
          In a world that tells you what to do, follow your instincts. Fortuner
          allows you to customise your<br></br> Fortuner to suit your personal
          preferences whether that’s transporting your most prized possession…
        </div>
        <img className="ph2" data-aos="zoom-in-right" src={da2} alt="ph2" />
        <img className="ph3-for" data-aos="zoom-in" src={for1} alt="ph3" />
        <img className="ph4" data-aos="zoom-in-left" src={da4} alt="ph4" />

        <div className="text">
          …or adding another essential component you’ve envisioned.<br></br>
          Journey to the far reaches of your imagination.
        </div>

        <img
          data-aos="zoom-in"
          className="phantom2"
          src={fortuner3}
          alt="phantom2"
        />
      </div>

      <div className="footer">
        <div className="text" style={{ paddingTop: '19%' }}>
          <h1>MAKE YOUR OWN RULES</h1>
          <br></br>
          The Fortuner Facelift looks fresh and more premium than before, while
          the updated feature list keeps it<br></br>
          up to date with the competition. The only concern now is the price,
          which has gone up by upto Rs 3 lakh,<br></br>
          and makes the Fortuner the costliest SUV in the segment.
        </div>
        <img className="phantom3" src={fortuner4} alt="phhantom3" />
      </div>
    </>
  );
};

export default Main;
