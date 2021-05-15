import React, {useEffect } from 'react';
// import models from '../css/models.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Nav from '../navbar';
import t1 from './img/t1.jpg';
import t2 from './img/t2.jpg';
import t3 from './img/t3.jpg';
import t4 from './img/t4.jpg';
import t5 from './img/t5.jpg';
import t6 from './img/t6.png';
import t7 from './img/t7.png';
import t8 from './img/t8.png';
import t9 from './img/t9.jpg';
import t10 from './img/t10.jpg';
import t11 from './img/t11.jpg';
// import t12 from './img/t12.jpg';

function Model_3() {
  useEffect(() => {
    Aos.init({ duration: '2000' });
  }, []);

  return (
    <>
      <div>
        <div className="logo">
          <a
            href="https://www.freepnglogos.com/pics/tesla-logo-png"
            title="Image from freepnglogos.com"
          ></a>
        </div>
        <div className="img_div">
          <img src={t1}></img>
        </div>
        <span className="model" data-aos="fade-up" style={{ marginTop: '-8%' }}>
          MODEL 3
        </span>
        <div className="l1">
          <ul>
            <li data-aos="fade-up">68cu ft</li>
            <li data-aos="fade-up">326mi</li>
            <li data-aos="fade-up">AWD</li>
            <li data-aos="fade-up">1020hp</li>
          </ul>
        </div>
        <div className="l2">
          <ul>
            <li data-aos="fade-up">Cargo Space</li>
            <li data-aos="fade-up">Range</li>
            <li data-aos="fade-up">Dual Motor</li>
            <li data-aos="fade-up">Peak Power</li>
          </ul>
        </div>
      </div>
      <div className="div2">
        <div>
          <img src={t2}></img>
        </div>
        <span className="interior" data-aos="fade-up">
          ALL NEW INTERIORS
        </span>
        <div style={{ width: '100%', height: '150px' }}></div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide active carousel-fade caro"
          data-aos="fade-up"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={t3} alt="First slide"></img>
              <div
                class="carousel-caption d-none d-md-block carocap"
                data-aos="fade-up"
              >
                <h4>17inch Touch Screen</h4>
                <p>
                  With 2200x1300 resolution, ultra bright, true colors and
                  exceptional responsiveness, the new center display is the best
                  screen to watch anywhere.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={t4} alt="Second slide"></img>
              <div
                class="carousel-caption d-none d-md-block"
                data-aos="fade-up"
              >
                <h4>17inch Centre console </h4>
                <p>
                  A touchscreen display designed to improve over time.
                  Over-the-air software updates introduce new features,
                  functionality and performance
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={t5} alt="Third slide"></img>
              <div
                class="carousel-caption d-none d-md-block"
                data-aos="fade-up"
              >
                <h4>Redesigned Third Row</h4>
                <p>Room for up to sever with optional third row</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="div3">
        <div className="info1">
          <img src={t6} data-aos="fade-right"></img>
          <div className="info_txt" data-aos="fade-left">
            <span>
              <h4>Optimized Aerodynamics</h4>
              Attention to detail on all exterior surfaces makes Model 3 one of
              the most aerodynamic production car on Earth..
            </span>
          </div>
        </div>

        <div className="info2">
          <img src={t7} data-aos="fade-up"></img>
          <div className="info_txt2" data-aos="fade-up">
            <span>
              <h4>Refined Styling</h4>
              Exterior design combines an iconic look with elegant proportions.
            </span>
          </div>
        </div>

        <div className="info3">
          <img src={t8} data-aos="fade-up"></img>
          <div className="info_txt3" data-aos="fade-up">
            <span>
              <h4>New Wheels and Tires</h4>
              New performance tires deliver better handling and ride quality
              with lower rolling resistance and are paired with new aerodynamic
              wheels for an updated look.
            </span>
          </div>
        </div>

        <div className="info4">
          <img src={t9} data-aos="fade-left"></img>
          <div className="info_txt4" data-aos="fade-right">
            <span>
              <h4>Your Best Audio system</h4>A 22-speaker, 960-watt audio system
              with active noise canceling offers the best listening at home or
              on the road.
            </span>
          </div>
        </div>
      </div>
      <div className="div4">
        <img src={t10} data-aos="fade-in"></img>
        <div className="l2 uni" data-aos="fade-up">
          <ul>
            <li style={{ color: 'white' }}>Dual Motor</li>
            <li style={{ color: 'white' }}>3.5s</li>
            <li style={{ color: 'white' }}>All Terrain Capable</li>
          </ul>
        </div>
        <div className="info_div" data-aos="fade-up">
          <h3
            style={{
              fontFamily: 'sans-serif',
              fontSize: '20px',
              marginLeft: '25%',
            }}
          >
            Performance
          </h3>
          <h1>Quickest Acceleration</h1>
          <h5>
            Model 3 comes with the option of dual motor all-wheel drive, 20”
            Überturbine Wheels and Performance Brakes and lowered suspension for
            total control, in all weather conditions. And a carbon fiber spoiler
            improves stability at high speeds, all allowing Model 3 to
            accelerate from 0-60 mph* in as little as 3.1 seconds.
          </h5>
        </div>
      </div>
      <div className="div5">
        <img src={t11} data-aos="fade-in"></img>
        <div className="l2 uni2" data-aos="fade-up">
          <ul>
            <li style={{ fontSize: '15px', width: '30%', color: 'black' }}>
              A touchscreen display designed to improve over time
            </li>
            <li style={{ fontSize: '15px', width: '30%', color: 'black' }}>
              Over-the-air software updates introduce new features,
              functionality and performance
            </li>
            <li style={{ fontSize: '15px', width: '30%', color: 'black' }}>
              An expansive Glass Roof provides more headroom and UV protection
            </li>
          </ul>
        </div>
        <div
          className="info_div"
          data-aos="fade-up"
          style={{ backgroundColor: 'white' }}
        >
          <h1>Built Around the Driver</h1>
          <h5>
            With an elevated seating position and low dash, the driver has a
            commanding view of the road ahead. The interior of Model Y is simple
            and clean, with a 15-inch touch screen, immersive sound system and
            an expansive all-glass roof that creates extra headroom and provides
            a seamless view of the sky.
          </h5>
        </div>
      </div>
    </>
  );
}
export default Model_3;
