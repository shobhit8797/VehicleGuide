import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
  componentDidMount() {
    $(document).on('ready', function () {
      $('.container').fadeIn(1000);
      $('.s2class').css({ color: '#EE9BA3' });
      $('.s1class').css({ color: '#748194' });
      $('#left').removeClass('left_hover');
      $('#right').addClass('right_hover');
      $('.signin').css({ display: 'none' });
      $('.signup').css({ display: '' });
    });
    $('#right').on('click', function () {
      $('#left').removeClass('left_hover');
      $('.s2class').css({ color: '#EE9BA3' });
      $('.s1class').css({ color: '#748194' });
      $('#right').addClass('right_hover');
      $('.signin').css({ display: 'none' });
      $('.signup').css({ display: '' });
    });
    $('#left').on('click', function () {
      $('.s1class').css({ color: '#EE9BA3' });
      $('.s2class').css({ color: '#748194' });
      $('#right').removeClass('right_hover');
      $('#left').addClass('left_hover');
      $('.signup').css({ display: 'none' });
      $('.signin').css({ display: '' });
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="c1">
            <div className="c11">
              <h1 className="mainhead">PICK YOUR SPOT</h1>
              <p className="mainp" style={{ color: '#9b9592' }}>
                Just click the buttons below to toggle between SignIn & SignUp
              </p>
            </div>
            <div id="left">
              <h1 className="s1class" style={{ cursor: 'pointer' }}>
                <span>SIGN</span>
                <span className="su">IN</span>
              </h1>
            </div>
            <div id="right">
              <h1 className="s2class" style={{ cursor: 'pointer' }}>
                <span>SIGN</span>
                <span className="su">UP</span>
              </h1>
            </div>
          </div>
          <div className="c2">
            <form className="signup">
              <h1 className="signup1" style={{ cursor: 'pointer' }}>
                SIGN UP
              </h1>
              <br />
              <br />
              <br />
              <br />
              <input
                name="username"
                type="text"
                placeholder="Username*"
                className="username"
              />

              <input
                name="email"
                type="text"
                placeholder="Email*"
                className="username"
              />

              <input
                name="password"
                type="password"
                placeholder="Password*"
                className="username"
              />

              <button className="btn" style={{ color: 'rgb(135 131 129)' }}>
                Sign Up
              </button>
            </form>
            <form className="signin">
              <h1 className="signup1">SIGN IN</h1>
              <br />
              <br />
              <br />
              <br />
              <input
                name="username"
                type="text"
                placeholder="Username*"
                className="username"
              />

              <input
                name="password"
                type="password"
                placeholder="Password*"
                className="username"
              />

              <button className="btn" style={{ color: 'rgb(135 131 129)' }}>
                Get Started
              </button>

              <br />
              <br />
              <br />
              <br />
              <a href="google.com">
                <p className="signup2">Forget Password?</p>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
