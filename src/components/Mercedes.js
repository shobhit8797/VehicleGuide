import React from 'react';
import '../css/Mercedes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../images/mercedes/car.png';
import g1 from '../images/mercedes/g1.jpeg';
import g2 from '../images/mercedes/g2.png';
import g3 from '../images/mercedes/g3.png';
import grex1 from '../images/mercedes/grex1.jpeg';
import grex2 from '../images/mercedes/grex2.png';
import grex3 from '../images/mercedes/grex3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
      
      <img className="header" src={car} alt="header"></img>
      <h1 className="title-mer">Mercedes G-Wagon.</h1>
      <p className="tagline">
        Strong characters. Strong emotions. Stronger than ever.
      </p>
      <div className="anime" data-aos={'zoom-in-right'}>
        <h1>The G-Class Experience</h1>
        <p>
          A perfect oppourtunity to experience G-Wagon sitting at your home.
        </p>
      </div>
      <div className="feature">
        <h1>G manufaktur.</h1>
        <img className="grex1" data-aos="fade-up" src={grex1} alt="grex" />
        <p style={{ paddingLeft: '45%', marginTop: '1%' }}>
          Mercedes-AMG G 63, G manufaktur refined.
        </p>

        <img className="grex2" data-aos="fade-up" src={grex2} alt="grex" />
        <h4
          style={{
            paddingLeft: '12%',
            marginTop: '1%',
            width: '30%',
            textAlign: 'left',
          }}
        >
          Room for individuality.
        </h4>
        <p style={{ paddingLeft: '12%', width: '30%', textAlign: 'left' }}>
          Great lengths are gone for the finest materials. Upholstery made with
          noble Nappa leather is fitted with great craftsmanship. You can sense
          it with every look and touch.
        </p>

        <img className="grex3" data-aos="fade-up" src={grex3} alt="grex" />
        <h4 style={{ paddingLeft: '27%', marginTop: '1%', width: '100%' }}>
          New from the G manufaktur: Black accents.
        </h4>
        <p style={{ paddingLeft: '60%', width: '31%', textAlign: 'left' }}>
          Even the character of a G-Class can be sharpened. The Black Accents
          either create exciting contrasts or enable a completely black look for
          the first time.
        </p>
      </div>
      <div className="amg" data-aos={'zoom-in-right'}>
        <h1>The Mercedes-AMG G 63.</h1>
        <p>
          Wherever the Mercedes-AMG G 63 shows its face, it is met with nothing
          but awe. Its passion, perfection and power make every journey feel
          like a victory.
        </p>
        <p className="space">Mercedes-AMG G 63: </p>
        <p className="space">Kraftstoffverbrauch kombiniert: 14,4 l/100 km;</p>
        <p className="space">CO₂-Emissionen kombiniert: 330 g/km.¹</p>
      </div>
      <div className="gClass">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={g1} alt="First slide" />
            <Carousel.Caption>
              <h3>Immerse yourself in the world of G-Class.</h3>
              <p>
                Whether it's a mud bath or a water crossings, the G-class is
                always better in its element with its 70cm fording depth. The
                perfect asset for this adventurous playground for grownups.{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={g2} alt="Second slide" />

            <Carousel.Caption>
              <h3>A masterclass for off-road challenges.</h3>
              <p>
                The G-Class remains an unsurpassed legend on off-road terrain,
                mastering all off-road disciplines effortlessly, including
                climbing ability and lean angles.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={g3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Test the G-Class in the wild.</h3>
              <p>
                Experience the legendary off-road capabilities of the G-Class.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Main;
