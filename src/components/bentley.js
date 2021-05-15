import React from 'react';
import '../css/bentley.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import bentley from '../images/bentley/bentley.jpg';
import bentley2 from '../images/bentley/bentley2.jpg';
import bentley3 from '../images/bentley/bentley3.jpg';
import bentley4 from '../images/bentley/bentley4.jpg';
import ben1 from '../images/bentley/ben1.jpg';
import ben2 from '../images/bentley/ben2.jpg';
import ben3 from '../images/bentley/ben3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
      <img className="header" src={bentley} alt="header"></img>
      <h1 className="title-mer">CONTINENTAL GT V8 CONVERTIBLE.</h1>
      <p className="tagline">
        Strong characters. Strong emotions. Stronger than ever.
      </p>

      <div className="anime" data-aos={'zoom-in-right'}>
        <h1>A DYNAMIC DRIVE</h1>
        <p style={{ width: '78%', marginLeft: '10%' }}>
          With the Bentley Continental GT V8 Convertible, open-air grand touring
          is always exhilarating. With a spirited V8 engine, innovative
          technology, sleek, contemporary design and exquisite attention to
          detail, you are both completely in touch with the road beneath you and
          fully connected to the world around you.
        </p>
      </div>

      <div className="feature">
        <h1>World of Bentley</h1>
        <img className="grex1" data-aos="fade-up" src={ben1} alt="grex" />
        <p
          style={{
            paddingLeft: '57%',
            marginTop: '1%',
            width: '34%',
            textAlign: 'left',
          }}
        >
          This stunning car takes the sharp, superformed lines of the
          Continental GT and adds sleek contemporary details that reflect its
          agile performance.
        </p>

        <img className="grex2" data-aos="fade-up" src={ben2} alt="grex" />
        <h4 style={{ paddingLeft: '4%', marginTop: '1%', width: '28%' }}>
          SHEER ACCELERATION
        </h4>
        <p style={{ paddingLeft: '9.5%', width: '30%', textAlign: 'left' }}>
          Discover a truly captivating driving experience.The result is a car
          that can accelerate from 0 to 60 mph in 3.9 seconds (0 to 100 km/h in
          4.0 seconds) and take you to a top speed of 198 mph (318 km/h).
        </p>

        <img className="grex3" data-aos="fade-up" src={ben3} alt="grex" />
        <h4 style={{ paddingLeft: '21%', marginTop: '1%', width: '100%' }}>
          IMMENSE JOY. IMMENSE POWER.
        </h4>
        <p style={{ paddingLeft: '59%', width: '37%', textAlign: 'left' }}>
          The Continental GT Speed is designed to inject your life with a pure
          rush of adrenaline. Its formidable W12 engine has been tuned to a
          unique Speed calibration that puts unprecedented power in your hands.
          This delivers astonishing performance that takes you from 0 to 60 mph
          in just 3.5 seconds (0 to 100 km/h in 3.6 seconds) and achieves a top
          speed of 208 mph (335 km/h).
        </p>
      </div>

      <div className="amg" data-aos={'zoom-in-right'}>
        <h1 style={{ marginLeft: '-7%' }}>A BOLD PRESENCE.</h1>
        <p>
          An exhilarating exterior design ensures that the Continental GT
          Speed’s impressive function is matched by compelling form..
        </p>
        <p className="space">Each bold detail hints at the power within; </p>
        <p className="space"> a Dark Tint Grille,</p>
        <p className="space">
          Speed Outer Sill and striking forged Speed 22” wheels
        </p>
      </div>

      <div className="gClass">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={bentley3} alt="First slide" />
            <Carousel.Caption>
              <h3>THE SPEED.</h3>
              <p>
                The new Bentley is a grand tourer that harnesses raw emotion. In
                each revolution of its W12 engine, and within every crafted
                detail, is an incredible power that puts immense thrill and
                drama at the heart of the drive{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bentley2} alt="Second slide" />

            <Carousel.Caption>
              <h3>THE CONVERTIBLE.</h3>
              <p>
                Renowned throughout the automotive world for crafting truly
                exceptional refined and individual Bentley vehicles, Bentley
                Mulliner’s latest creation harnesses the beauty, power and
                spirit of the Continental GT Convertible to form the
                ultra-luxurious expression of this elegant grand tourer. Meet
                the Continental GT Mulliner Convertible.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bentley4} alt="Third slide" />

            <Carousel.Caption>
              <h3>THE CONTINENTAL.</h3>
              <p>
                With the Bentley Continental GT V8 Convertible, open-air grand
                touring is always exhilarating. With a spirited V8 engine,
                innovative technology, sleek, contemporary design and exquisite
                attention to detail, you are both completely in touch with the
                road beneath you and fully connected to the world around you.
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
