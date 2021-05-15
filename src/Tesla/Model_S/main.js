import s1 from '../Model_S/img/s1.jpg';
import React, { useState, useEffect } from 'react';
import models from '../css/models.css';
import Nav from '../navbar';
import s2 from '../Model_S/img/s2.jpg';
import Carousil from '../carousil/main';
import Aos from 'aos';
import 'aos/dist/aos.css';
import s3 from '../Model_S/img/s3.jpg';
import s4 from '../Model_S/img/s4.jpg';
import s5 from '../Model_S/img/s5.jpg';
import s6 from '../Model_S/img/s6.jpg';
import s7 from '../Model_S/img/s7.jpg';
import s8 from '../Model_S/img/s8.jpg';
import s9 from '../Model_S/img/s9.jpg';
import s10 from '../Model_S/img/s10.jpg';
import s11 from '../Model_S/img/s11.jpg';
// import Footer from '../../components/Footer';

function Model_s() {
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
          <img src={s1}></img>
        </div>
        <span className="model" data-aos="fade-up">
          MODEL S
        </span>
        <div className="l1">
          <ul>
            <li data-aos="fade-up">390mi</li>
            <li data-aos="fade-up">1.99s</li>
            <li data-aos="fade-up">200mph</li>
            <li data-aos="fade-up">1020hp</li>
          </ul>
        </div>
        <div className="l2">
          <ul>
            <li data-aos="fade-up">Range (est.)</li>
            <li data-aos="fade-up">0-60 mph*</li>
            <li data-aos="fade-up">Top Speed†</li>
            <li data-aos="fade-up">Peak Power</li>
          </ul>
        </div>
      </div>

      <div className="div2">
        <div>
          <img src={s2}></img>
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
              <img class="d-block w-100" src={s3} alt="First slide"></img>
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
              <img class="d-block w-100" src={s4} alt="Second slide"></img>
              <div
                class="carousel-caption d-none d-md-block"
                data-aos="fade-up"
              >
                <h4>Focus on Driving </h4>
                <p>
                  The ultimate focus on driving: no stalks, no shifting. Model S
                  is the best car to drive, and the best car to be driven in.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={s5} alt="Third slide"></img>
              <div
                class="carousel-caption d-none d-md-block"
                data-aos="fade-up"
              >
                <h4>Redesigned Second Row</h4>
                <p>
                  Seating for three adults, with extra headroom and a stowable
                  armrest with integrated storage and wireless charging.
                </p>
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
          <img src={s6} data-aos="fade-right"></img>
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
          <img src={s7} data-aos="fade-up"></img>
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
          <img src={s8} data-aos="fade-up"></img>
          <div className="info_txt3" data-aos="fade-up">
            <span>
              <h4>Your Best Audio system</h4>A 22-speaker, 960-watt audio system
              with active noise canceling offers the best listening at home or
              on the road.
            </span>
          </div>
        </div>

        <div className="info4">
          <img src={s9} data-aos="fade-left"></img>
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
        <img src={s10} data-aos="slide-up"></img>
        <div className="l2 uni" data-aos="fade-up">
          <ul>
            <li>1.99s</li>
            <li>200mph</li>
            <li>1020hp</li>
          </ul>
        </div>
        <div className="info_div" data-aos="fade-up">
          <h1>Beyond Ludicrous</h1>
          <h5>
            With the longest range and quickest acceleration of any electric
            vehicle in production, Model S Plaid is the highest performing sedan
            ever built. Both Long Range and Plaid powertrains, with updated
            battery architecture, are capable of back-to-back, consistent 1/4
            mile runs.
          </h5>
        </div>
      </div>

      <div className="div5">
        <img src={s11} data-aos="slide-up"></img>
        <div className="l2 uni2" data-aos="fade-up">
          <ul>
            <li style={{ fontSize: '15px' }}>Performance-focused chassis</li>
            <li>0.208cd</li>
            <li style={{ fontSize: '15px' }}>Refined exterior styling</li>
          </ul>
        </div>
        <div className="info_div" data-aos="fade-up">
          <h1>Designed for Efficiency</h1>
          <h5>
            With the lowest drag coefficient on Earth and unmatched efficiency,
            Model S is built for speed and range. Together with a wider body and
            chassis, these elements help you go down the straight or around
            corners quicker than ever.
          </h5>
        </div>
      </div>
    </>
  );
}
export default Model_s;
