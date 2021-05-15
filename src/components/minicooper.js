import React from 'react';
import '../css/Mercedes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import cooper from '../images/minicooper/cooper.jpg';
import mini1 from '../images/minicooper/mini1.jpg';
import mini2 from '../images/minicooper/mini2.jpg';
import mini3 from '../images/minicooper/mini3.jpg';
import cooper2 from '../images/minicooper/cooper2.jpg';
import cooper3 from '../images/minicooper/cooper3.jpg';
import cooper4 from '../images/minicooper/cooper4.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
      
      <img className="header" src={cooper} alt="header"></img>
      <h1 className="title-mer">THE NEW MINI COUNTRYMAN.</h1>
      <p className="tagline">Add Inspiration.</p>

      <div className="anime" data-aos={'zoom-in-right'}>
        <h1>MAKE ROOM FOR MORE ADVENTURES.</h1>
        <p>
          The highly versatile MINI Countryman seats five, is more comfortable
          than ever and designed to handle everything your journey throws at
          you.
        </p>
      </div>

      <div className="feature">
        <h1>ROAM LARGE.</h1>
        <img className="grex1" data-aos="fade-up" src={mini1} alt="grex" />
        <p style={{ paddingLeft: '57%', width: '30%', textAlign: 'left' }}>
          No need to compromise.The new MINI Countryman is an intrepid
          adventurer equipped with a go-anywhere confidence.{' '}
        </p>

        <img className="grex2" data-aos="fade-up" src={mini2} alt="grex" />
        <h4 style={{ marginLeft: '-28%', marginTop: '1%', width: '100%' }}>
          UP TO 1,390 L BOOT SPACE.
        </h4>
        <p style={{ marginLeft: '11%', width: '31%', textAlign: 'left' }}>
          The most robust and ruggedly handsome MINI will always attract a good
          crowd. Good thing it’s big enough to fit one in – with more than
          enough legroom, headroom and elbow room for your backseat passengers,
          too.
        </p>

        <img className="grex3" data-aos="fade-up" src={mini3} alt="grex" />
        <h4 style={{ paddingLeft: '43%', marginTop: '1%', width: '46%' }}>
          VARIABLE SEATS..
        </h4>
        <p style={{ paddingLeft: '59%', width: '31%', textAlign: 'left' }}>
          The generous boot space gives you ample space for your plans. And when
          the rear seats are folded into the 40/20/40 configuration, the new
          MINI Countryman can accomodate cargo that's long, tall, wide or bulky.{' '}
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
            <img className="d-block w-100" src={cooper2} alt="First slide" />
            <Carousel.Caption>
              <h3>EASY OPENER.</h3>
              <p>
                Your hands are full but you need to open the boot? Just use your
                feet. Thanks to the Comfort Access and Easy Opener function, in
                conjunction with the automatic tailgate operation, you can open
                the rear hatch door of your MINI Countryman with a quick,
                directed wave of the foot under the rear bumper.{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cooper3} alt="Second slide" />

            <Carousel.Caption>
              <h3>SIZEABLE BOOT SPACE.</h3>
              <p>
                The MINI Countryman is built to accommodate all types of trips
                in the city and the country. Its back seats fold to offer extra
                boot space or legroom, so you can quickly and easily use the up
                to 1,390 litres of room to take supplies for any adventure.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cooper4} alt="Third slide" />

            <Carousel.Caption>
              <h3>MINI PICNIC BENCH.</h3>
              <p>
                Entertain in style on the comfortable picnic bench for two. This
                soft 2-seater bench comes with a fender dirt protection flap, so
                you keep clean as you sit back and take a break from roaming the
                countryside.
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
