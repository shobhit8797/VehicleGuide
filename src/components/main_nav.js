import '../css/main_nav.css';
import { Link } from 'react-router-dom';
import logo from '../images/Weblogo.jpeg';

function Nav() {
  return (
    <div>
      <nav>
        <div class="wrapper">
          <div class="logo">
            <Link to="/">Vehicle Guide</Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn">
              <i class="fas fa-times"></i>
            </label>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                class="desktop-item"
                to={{
                  pathname: '/electric',
                  model_type: 'electric',
                }}
              >
                Catalog
              </Link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">
                Dropdown Menu
              </label>
              <ul class="drop-menu">
                <li>
                  <Link
                    class="desktop-item"
                    to={{
                      pathname: '/luxury',
                      model_type: 'luxury',
                    }}
                  >
                    Luxury
                  </Link>
                </li>
                <li>
                  <Link
                    class="desktop-item"
                    to={{
                      pathname: '/sports',
                      model_type: 'sports',
                    }}
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    class="desktop-item"
                    to={{
                      pathname: '/electric',
                      model_type: 'electric',
                    }}
                  >
                    Electric
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: '/popular',
                      model_type: 'popular',
                    }}
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a class="desktop-item">Developers</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Developers
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src={logo} alt="Logo Vehicle Guide" />
                  </div>
                  <div class="row">
                    <header>Name</header>
                    <ul class="mega-links">
                      <li>
                        <a href="https://github.com/shobhitgoyal2002">
                          Shobhit Goyal
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/s1mrann">Simran Kaur</a>
                      </li>
                      <li>
                        <a href="https://github.com/trithankar">
                          Tirthangkar Das
                        </a>
                      </li>
                      <li>
                        <a href="#">Tushar Sharma</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Email Services</header>
                    <ul class="mega-links">
                      <li>
                        <a href="mailto:shobhit1322@chitkara.edu.in">
                          shobhit1322@chitkara.edu.in
                        </a>
                      </li>
                      <li>
                        <a href="mailto:simrandeep1328@chitkara.edu.in">
                          simrandeep1328@chitkara.edu.in
                        </a>
                      </li>
                      <li>
                        <a href="mailto:tirthangkar1328@chitkara.edu.in">
                          tirthangkar1328@chitkara.edu.in
                        </a>
                      </li>
                      <li>
                        <a href="mailto:tushar1333@chitkara.edu.in">
                          tushar1333@chitkara.edu.in
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Git Hub</header>
                    <ul class="mega-links">
                      <li>
                        <a href="https://github.com/shobhitgoyal2002">
                          shobhitgoyal2002
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/s1mrann">s1mrann</a>
                      </li>
                      <li>
                        <a href="https://github.com/trithankar">
                          tirthangkar_ds
                        </a>
                        <a href="https://github.com/">tushar1333</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: '600',
                marginLeft: '20px',
              }}
              to={{
                pathname: '/contact',
              }}
            >
              Contact Us
            </Link>

            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: '600',
                marginLeft: '20px',
              }}
              to={{
                pathname: '/login',
              }}
            >
              LOGIN
            </Link>
          </ul>
          <label for="menu-btn" class="btn menu-btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
