import React from 'react';
import Tabs from './Tabs';
import tesla from '../Tesla/Model_S/img/s1.jpg';
import tesla2 from '../Tesla/Model_3/img/t1.jpg';
import tesla3 from '../Tesla/Model_X/img/x1.jpg';
import tesla4 from '../Tesla/Model_Y/img/y1.jpg';
import '../css/catelog_css.css';
import bentley2 from '../images/bentley/bentley2.jpg';
import porsche3 from '../images/porsche/porsche3.jpg';
import dawn2 from '../images/Dawn/dawn2.jpg';
import mas1 from '../images/maserati.jpg';
import hu9 from '../images/hyundai/hu9.jpg';
import phantom2 from '../images/phantom/phantom2.png';
import intro2 from '../images/lexus.jpg';
import cooper4 from '../images/minicooper/cooper4.jpg';
import g2 from '../images/mercedes/g2.png';
import grex1 from '../images/mercedes/grex1.jpeg';
import compass3 from '../images/compass/compass3.jpg';
import ford from '../images/ford/ford.jpg';
import fortuner from '../images/forturner-back.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const model = [
  {
    electric: [
      { model_name: 'Model S', location: tesla, individual_car: '/modelS' },
      { model_name: 'Model 3', location: tesla2, individual_car: '/model3' },
      { model_name: 'Model X', location: tesla3, individual_car: '/modelX' },
      { model_name: 'Model Y', location: tesla4, individual_car: '/modelY' },
    ],
  },
  {
    convertible: [
      { model_name: 'Porsche', location: porsche3, individual_car: '/porsche' },
      {
        model_name: 'Rolls Royce Dawn',
        location: dawn2,
        individual_car: '/royacedawn',
      },
      { model_name: 'Maserati', location: mas1, individual_car: '/maserati' },
      {
        model_name: 'Bentley',
        location: bentley2,
        individual_car: '/bentley',
      },
    ],
  },
  {
    sedan: [
      {
        model_name: 'Hyundai Verna',
        location: hu9,
        individual_car: '/hyundai',
      },
      {
        model_name: 'Rolls Royce Phantom',
        location: phantom2,
        individual_car: '/phantom',
      },
      { model_name: 'Lexus', location: intro2, individual_car: '/lexus' },
    ],
  },

  {
    hatchBack: [
      {
        model_name: 'Mini Cooper',
        location: cooper4,
        individual_car: '/minicooper',
      },
      { model_name: 'Ford', location: ford, individual_car: '/ford' },
    ],
  },

  {
    suv: [
      { model_name: 'Mercedes', location: g2, individual_car: '/mercedes' },
      {
        model_name: 'Jeep Compass',
        location: compass3,
        individual_car: '/compass',
      },
      {
        model_name: 'Fortuner',
        location: fortuner,
        individual_car: '/fortuner',
      },
    ],
  },
  {
    premium: [
      {
        model_name: 'Phantom',
        location: phantom2,
        individual_car: '/phantom',
      },
      { model_name: 'Mercedes', location: grex1, individual_car: '/mercedes' },
      {
        model_name: 'Porsche',
        location: porsche3,
        individual_car: '/porsche',
      },
      { model_name: 'Maserati', location: mas1, individual_car: '/maserati' },
    ],
  },
  {
    luxury: [
      {
        model_name: 'Rolls Royce Dawn',
        location: dawn2,
        individual_car: '/royacedawn',
      },
      { model_name: 'Lexus', location: intro2, individual_car: '/lexus' },
      { model_name: 'Mercedes', location: g2, individual_car: '/mercedes' },
    ],
  },
  {
    offRoad: [
      { model_name: 'Mercedes', location: g2, individual_car: '/mercedes' },
      {
        model_name: 'Jeep Compass',
        location: compass3,
        individual_car: '/compass',
      },
    ],
  },
  {
    sports: [
      {
        model_name: 'Porsche',
        location: porsche3,
        individual_car: '/porsche',
      },
      { model_name: 'Maserati', location: mas1, individual_car: '/maserati' },
    ],
  },
  {
    popular: [
      { model_name: 'Ford', location: ford, individual_car: '/ford' },
      { model_name: 'Model S', location: tesla, individual_car: '/modelS' },
      { model_name: 'Lexus', location: intro2, individual_car: '/lexus' },
      {
        model_name: 'Mini Cooper',
        location: cooper4,
        individual_car: '/minicooper',
      },
    ],
  },
];

class Catelog extends React.Component {
  render() {
    AOS.init({ duration: 1000 });
    return (
      <div>
        <Tabs />
        <div>
          {model.map((cat) => (
            <div className="cards">
              {Object.keys(cat).map((indiv, index) => (
                <>
                  {this.props.location.pathname.slice(1) === indiv
                    ? cat[indiv].map((co) => (
                        <div className="relPos">
                          <div className="car_pic">
                            <img
                              alt="car-pic"
                              src={co.location}
                              data-aos="slide-right"
                            />
                          </div>
                          <div className="simron">{co.model_name}</div>
                          <Link
                            className="decoration"
                            to={{
                              pathname: `${co.individual_car}`,
                            }}
                          >
                            <div className="but">More Info</div>
                          </Link>
                        </div>
                      ))
                    : console.log(indiv)}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Catelog;
