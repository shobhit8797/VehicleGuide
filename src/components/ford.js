import React from 'react';
import '../css/ford.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ford from '../images/ford/ford.jpg';
import f1 from '../images/ford/f1.jpg';
import f2 from '../images/ford/f2.jpg';
import f3 from '../images/ford/f3.jpg';
import ford2 from '../images/ford/ford2.jpeg';
import ford3 from '../images/ford/ford3.jpg';
import ford4 from '../images/ford/ford4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
      <img className="header" src={ford} alt="header"></img>
      <h1 className="title-mer">Ford Mustang.</h1>
      <p className="tagline">Play Smart. Why Follow.</p>
      <div className="anime" data-aos={'zoom-in-right'}>
        <h1>The Ford Experience</h1>
        <p>
          A perfect oppourtunity to experience Mustang sitting at your home.
        </p>
      </div>
      <div className="feature">
        <h1>EcoBoost.</h1>
        <img
          className="grex1"
          data-aos="fade-up"
          src={f1}
          alt="grex"
          style={{}}
        />
        <p style={{ paddingLeft: '57%', width: '30%', textAlign: 'left' }}>
          Hear the roar of a Mustang as the ground starts to tremble and your
          legs start to shake..
        </p>

        <img className="grex2" data-aos="fade-up" src={f2} alt="grex" />
        <h4 style={{ paddingLeft: '11%', marginTop: '1%', width: '28%' }}>
          The Pavement’s Your Playground.
        </h4>
        <p style={{ paddingLeft: '12%', width: '30%', textAlign: 'left' }}>
          Whether you choose the all-new well-balanced Mach 1, the insanely
          powerful Shelby® GT500® or the classic nostalgia of the Mustang
          Fastback, the energy behind the wheel is unmistakable.
        </p>

        <img className="grex3" data-aos="fade-up" src={f3} alt="grex" />
        <h4 style={{ paddingLeft: '57%', marginTop: '1%', width: '100%' }}>
          Power.
        </h4>
        <p
          style={{
            paddingLeft: '58.5%',
            width: '30%',
            textAlign: 'left',
            marginTop: '-2%',
          }}
        >
          The 2.3L high performance engine differenciates itself with a slightly
          higher twin-scroll turbo compressor.
        </p>
      </div>
      <div className="amg" data-aos={'zoom-in-right'}>
        <h1 style={{ marginLeft: '22%', textAlign: 'left' }}>
          Designed to perfectly fit in your smart world.
        </h1>
        <p>
          Mustang is designed to perfectly fit in your smart world. Its
          energetic.
        </p>
        <p className="space">
          design and powerful engine are always ready to fuel your fast-paced
          lifestyle.
        </p>
        <p className="space">
          . Its smart technology and safety features add fun and ease to every
          journey.
        </p>
        <p className="space">
          Giving you the confidence to take on life and manoeuvre through twists
          and turns in a smart way!
        </p>
      </div>
      <div className="gClass">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={ford2} alt="First slide" />
            <Carousel.Caption>
              <h3>Standard Base Suspension </h3>
              <p>
                The standard base suspension on Mustang is primed for
                responsivehandling. Indeoendent components add to the feeling of
                control you get with a Mustang and create a steady ride quality.{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ford3} alt="Second slide" />

            <Carousel.Caption>
              <h3>Auto-dimming IRVM.</h3>
              <p>
                Big boon while driving in the night. Cars in the segment as well
                as above miss out on this.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ford4} alt="Third slide" />

            <Carousel.Caption>
              <h3>MagneRide Damping System .</h3>
              <p>
                When road conditions change, the available MagneRide damping
                system responds- 1,000 times per second for each damper. The
                result is smooth, balanced ride and the confidence to perform at
                your limits.
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
