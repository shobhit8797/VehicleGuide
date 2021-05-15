import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import y1 from './img/y1.jpg';
import y2 from './img/y2.jpg';
import y3 from './img/it.png';
import y4 from './img/it1.png';
import y5 from './img/it2.png';
import y6 from './img/y6.jpg';
import y7 from './img/y7.jpg';
import y8 from './img/y8.jpg';
import y9 from './img/y9.jpg';
import y10 from './img/y10.jpg';

function Model_y() {
  useEffect(() => {
    Aos.init({ duration: '2000' });
  }, []);

  return (
    <>
      <div>
        <div className="logo">
          <a
            href="https://www.freepnglogos.com/pics/tesla-logo-png"
            alt="Tesla logo"
            title="Image from freepnglogos.com"
          ></a>
        </div>
        <div className="img_div">
          <img src={y1} alt="tesla img" />
        </div>
        <span className="model" data-aos="fade-up" style={{ marginTop: '-6%' }}>
          MODEL Y
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
          <img src={y2} alt="tesla img" />
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
              <img class="d-block w-100" src={y3} alt="First slide"></img>
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
              <img class="d-block w-100" src={y4} alt="Second slide"></img>
              <div
                class="carousel-caption d-none d-md-block"
                data-aos="fade-up"
              >
                <h4>More Storage and Cargo</h4>
                <p>Versatile Seating for Cargo and passengers</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={y5} alt="Third slide"></img>
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
          <img src={y6} data-aos="fade-right" alt="tesla img" />
          <div className="info_txt" data-aos="fade-left">
            <span>
              <h4>Game from Anywhere</h4>
              up to 10 teraflops of processing power enables in-car gaming
              on-par with today's newest consoles. Wireless controller
              compatibility lets you game from any seat.
            </span>
          </div>
        </div>

        <div className="info2">
          <img src={y7} data-aos="fade-up" alt="tesla img" />
          <div className="info_txt2" data-aos="fade-up">
            <span>
              <h4>Stay Connected</h4>
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger, with enough power to fast-charge your tablets and
              laptop.
            </span>
          </div>
        </div>

        <div className="info3">
          <img src={y8} data-aos="fade-up" alt="tesla img" />
          <div className="info_txt3" data-aos="fade-up">
            <span>
              <h4>Your Best Audio system</h4>A 22-speaker, 960-watt audio system
              with active noise canceling offers the best listening at home or
              on the road.
            </span>
          </div>
        </div>

        <div className="info4">
          <img src={y9} data-aos="fade-left" alt="tesla img" />
          <div className="info_txt4" data-aos="fade-right">
            <span>
              <h4>Real Storage</h4>
              With front and rear trunks and fold-flat seats, S is a luxury car
              where you can fit your bike without taking the wheel off, and your
              luggage too.
            </span>
          </div>
        </div>
      </div>

      <div className="div4">
        <img src={y10} data-aos="fade-in" alt="tesla img" />
        <div className="l2 uni" data-aos="fade-up">
          <ul>
            <li style={{ color: 'white' }}>Dual Motor</li>
            <li style={{ color: 'white' }}>3.5s</li>
            <li style={{ color: 'white' }}>All Terrain Capable</li>
          </ul>
        </div>
        <div className="info_div" data-aos="fade-up">
          <h3 style={{ fontFamily: 'sans-serif' }}>All wheel drive</h3>
          <h1>Dual Motor</h1>
          <h5>
            Tesla All-Wheel Drive has two ultra-responsive, independent electric
            motors that digitally control torque to the front and rear
            wheels—for far better handling, traction and stability control.
            Model Y is capable in rain, snow, mud and off-road.
          </h5>
        </div>
      </div>

      <div className="div5">
        <img src={y3} data-aos="fade-in" alt="tesla img" />
        <div className="l2 uni2" data-aos="fade-up">
          <ul>
            <li style={{ fontSize: '15px', width: '30%' }}>
              A touchscreen display designed to improve over time
            </li>
            <li style={{ fontSize: '15px', width: '30%' }}>
              Over-the-air software updates introduce new features,
              functionality and performance
            </li>
            <li style={{ fontSize: '15px', width: '30%' }}>
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
export default Model_y;
