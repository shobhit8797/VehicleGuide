import React from 'react';
import { Component } from 'react';
import '../css/footer_css.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-head">
          <h1>Vehicle Guide</h1>
        </div>

        <div className="footer-lists">
          <ul className="list-block">
            <li className="li-head">About</li>
            <li className="list-items">The Project</li>
            <li className="list-items">Jobs</li>
            <li className="list-items">Press</li>
          </ul>
          <ul className="list-block">
            <li className="li-head">Contribute</li>
            <li className="list-items">Donate</li>
            <li className="list-items">Organize</li>
            <li className="list-items">Translate</li>
          </ul>
          <ul className="list-block">
            <li className="li-head">Community</li>
            <li className="list-items">Devlopers</li>
            <li className="list-items">Designers</li>
            <li className="list-items">Educators</li>
          </ul>
          <ul className="list-block">
            <li className="li-head">Contact</li>
            <li className="list-items">Email</li>
            <li className="list-items">Twitter</li>
            <li className="list-items">Feedback</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
