import React from 'react';
import '../css/Hyundai.css';
import hu2 from '../images/hyundai/hu2.jpg';
import hu3 from '../images/hyundai/hu3.jpg';
import hu4 from '../images/hyundai/hu4.jpg';
import hu5 from '../images/hyundai/hu5.jpg';
import hu6 from '../images/hyundai/hu6.jpg';
import hu7 from '../images/hyundai/hu7.jpg';
import hu9 from '../images/hyundai/hu9.jpg';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <img className="header" src={hu9} alt="header"></img>
      <h1 className="title-mer">Hyundai Verna.</h1>
      <p className="tagline">Live the thrill.</p>

      <div className="anime" data-aos={'zoom-in-right'}>
        <h1>Big on style and features</h1>
        <p>
          The Spirited New VERNA gives you everything you have ever wanted in a
          sporty sedan and much more.
        </p>
      </div>

      <div className="feature">
        <h1>The Spirited</h1>
        <img className="grex1" data-aos="fade-up" src={hu5} alt="grex" />
        <p style={{ paddingLeft: '45%', marginTop: '1%' }}>Smart Trunk</p>

        <img className="grex2" data-aos="fade-up" src={hu6} alt="grex" />
        <p
          style={{
            paddingLeft: '12%',
            marginTop: '1%',
            width: '30%',
            textAlign: 'left',
          }}
        >
          Smooth Paddle Shifters.
        </p>

        <img className="grex3" data-aos="fade-up" src={hu7} alt="grex" />
        <p
          style={{
            paddingLeft: '60%',
            width: '31%',
            textAlign: 'left',
            marginTop: '1%',
          }}
        >
          New from the G manufaktur: Black accents.
        </p>
      </div>

      <div className="amg" data-aos={'zoom-in-right'}>
        <h1 style={{ marginLeft: '-7%' }}>Spirited Features</h1>
        <p>Hyundai Blue Link.</p>
        <p className="space">Arkamys Premium Sound System. </p>
        <p className="space">20.32 cm Touch screen AVNT with HD Display.</p>
      </div>

      <div className="gClass">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={hu2} alt="First slide" />
            <Carousel.Caption>
              <h3>Hyundai Blue Link.</h3>
              <p>
                Blue Link is the personal mobility assistant, which proactively
                work for your safety, convenience and security. It comes with a
                responsive and dynamic telematics platform that acts as a
                communication channel between you and your car.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hu3} alt="Second slide" />

            <Carousel.Caption>
              <h3>Arkamys Premium Sound System.</h3>
              <p>
                Enjoy your drive and let the world fade away to the beat of your
                favourite music with Arkamys Premium Sound system. It has Front
                Tweeters, Front & Rear Speakers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hu4} alt="Third slide" />

            <Carousel.Caption>
              <h3>20.32 cm Touch screen AVNT with HD Display.</h3>
              <p>
                All New 20.32cm touchscreen navigation system features many
                functions which makes every drive convenient & pleasurable.
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
