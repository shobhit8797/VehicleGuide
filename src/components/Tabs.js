import React, { Component } from 'react';
import '../css/tab_css.css';
import electric from '../images/electric.jpg';
import sedan from '../images/sedan.jpg';
import hatchback from '../images/hatchback.jpg';
import SUV from '../images/SUV.jpg';
import convertibles from '../images/convertibles.jpg';
import luxury from '../images/luxury.jpg';
import premium from '../images/premium.jpg';
import offroad from '../images/offroad.jpg';
import popular from '../Tesla/Model_3/img/t1.jpg';
import sports from '../images/sports.png';
import { Link } from 'react-router-dom';

const company_name = [
  {
    company: 'Electric',
    url: '/electric',
    icon_url: electric,
  },
  {
    company: 'Sedan',
    url: '/sedan',
    icon_url: sedan,
  },
  {
    company: 'HatchBack',
    url: '/hatchBack',
    icon_url: hatchback,
  },
  {
    company: 'SUV',
    url: '/suv',
    icon_url: SUV,
  },
  {
    company: 'Convertible',
    url: '/convertible',
    icon_url: convertibles,
  },
  {
    company: 'Luxury',
    url: '/luxury',
    icon_url: luxury,
  },
  {
    company: 'Premium',
    url: '/premium',
    icon_url: premium,
  },
  {
    company: 'OffRoad',
    url: 'offRoad',
    icon_url: offroad,
  },
  {
    company: 'Popular',
    url: '/popular',
    icon_url: popular,
  },
  {
    company: 'Sports',
    url: '/sports',
    icon_url: sports,
  },
];

class Tabs extends Component {
  render() {
    return (
      <div>
        <div className="tablet">
          {company_name.map((n) => (
            <div className="tab">
              <Link
                to={{
                  pathname: `${n.url}`,
                  model_type: n.company,
                }}
              >
                <img alt="icon" src={n.icon_url} />
                <p className="abc">{n.company}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
