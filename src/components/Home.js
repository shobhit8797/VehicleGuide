import React from 'react';
import '../css/homepage.css';
import img8 from '../images/ford/f1.jpg';
import car1 from '../images/ford/f2.jpg';
import ph1 from '../images/ph1.jpg';
import ph2 from '../images/ph2.jpg';
import dawn from '../images/Dawn/dawn.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    AOS.init({ duration: 1000 });
    return (
      <>
        <div className="bgimg">
          <img alt="img car" src={img8} />
        </div>
        <div className="main">
          <img src={img8} alt="header-img" />
        </div>
        <div className="main-top" data-aos="slide-left">
          <img src={car1} alt="main" />
        </div>
        <div className="home_name1" data-aos="slide-right">
          <span>MUSTANG</span>
        </div>

        <div>
          <div className="main_div2">
            <div className="gwag" data-aos="slide-left">
              <img src={dawn} alt="dawn" />
            </div>
            <div className="gwag_info">
              <h1 data-aos="fade-up">
                Many years ago, engineers in Graz developed a new type of DNA.
              </h1>
              <span data-aos="slide-right">
                The G-Class retains its characteristic design with its edges and
                corners, even though the entire vehicle has been almost
                completely redesigned. With all its power, imposing nature and
                driving pleasure off-road and in the city, the G-Class is always
                one thing in particular: a unique design object. The striking
                exterior of the G-Class is reflected in particular in the
                redesigned front and on the rear of the vehicle with the iconic
                spare wheel.
              </span>
            </div>
          </div>
        </div>

        <div className="main_div3">
          <div className="right_img" data-aos="slide-up">
            <img alt="carimage" src={ph1} />
          </div>
          <div className="left_img" data-aos="slide-up">
            <img alt="carimage" src={ph2} />
          </div>
          <div className="info_left" data-aos="fade-right">
            <h2>RR phantom</h2>
            <span>
              The creation of Phantom Extended is the creation of legacy. Like
              the Siamese Fighting Fish, no two are ever the same. As the vision
              of the patron is melded by artisans, the legend is brought to
              life. Phantom Extended stands alone, powerful and beautiful.
              Master of its domain.
            </span>
          </div>
        </div>
        <div className="info_right" data-aos="fade-up">
          <h2>RR Phantom</h2>
          <span>
            Each Phantom Extended is singular; no two are ever the same. Each
            Phantom Extended is crafted to the vision of its patron, a
            manifestation of our philosophy that unique is rarely experienced.
            Phantom Extended is made in your image, not for your image. Whether
            you take the wheel or recline in the Phantom Suite, the harmonious
            collaboration of technology and engineering delivers exquisite
            poise. In every moment of every journey, Phantom Extended exists
            beyond previous conceptions of automotive perfection.
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '300%',
            width: '100%',
            color: 'white',
          }}
        >
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
