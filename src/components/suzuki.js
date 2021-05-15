import React from 'react';
import '../css/suzuki.css';
import suzuki from '../images/suzuki/suzuki.jpg';
import suzuki2 from '../images/suzuki/suzuki2.jpg';
import da2 from '../images/Dawn/da2.png';
import su3 from '../images/suzuki/su3.jpg';
import da4 from '../images/Dawn/da4.png';
import suzuki3 from '../images/suzuki/suzuki3.jpg';
import suzuki4 from '../images/suzuki/suzuki4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header-rolls" src={suzuki} alt="phantom" />
      <h1 className="brand-suzuki" style={{ left: '27%' }}>
        SUZUKI
      </h1>

      <div className="text">
        So reinvent the wheel. Disrupt the norms.<br></br>
        Rip up the rule book. Suzuki will be there for the ride.
      </div>
      <img className="ph1" src={suzuki2} alt="phantom" />
      <div className="slider">
        <div className="text">
          <h4>Maintain the correct image expected of your Suzuki</h4>
          <br></br>
          In a world that tells you what to do, follow your instincts.Suzuki
          allows you to customise your<br></br> Suzuki to suit your personal
          preferences whether that’s transporting your most prized possession…
        </div>
        <img className="ph2" data-aos="zoom-in-right" src={da2} alt="ph2" />
        <img className="ph3" data-aos="zoom-in" src={su3} alt="ph3" />
        <img className="ph4" data-aos="zoom-in-left" src={da4} alt="ph4" />

        <div className="text">
          …or adding another essential component you’ve envisioned.<br></br>
          Journey to the far reaches of your imagination.
        </div>

        <img
          data-aos="zoom-in"
          className="phantom2"
          src={suzuki3}
          alt="phantom2"
        />
      </div>

      <div className="footer">
        <div className="text" style={{ paddingTop: '20%' }}>
          <h1>MAKE YOUR OWN RULES</h1>
          <br></br>
          Savour the rough with the smooth. Engineering and technology perform
          in harmonious collaboration,<br></br>
          insulating from even the most challenging road conditions. Delivering
          a magnificently graceful drive for<br></br>
          you to test the limits of your fearlessness.
        </div>
        <img className="phantom3" src={suzuki4} alt="phhantom3" />
      </div>
    </>
  );
};

export default Main;
