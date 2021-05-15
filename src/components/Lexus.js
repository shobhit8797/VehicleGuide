import React, { Component } from 'react';
import '../css/lexus.css';
import intro2 from '../images/Lexus_IS500_intro2.jpg';


class Lexus extends Component {
  render() {
    return (
      <div>
        <div className="top_lex">
          <div className="top_lex_img">
            <img
              src="https://www.lexus.com/content/dam/lexus/images/homepage/hero/2021/Lexus-IS-Homepage-Hero-Desktop-1920x795-LEX-ISG-MY21-0067_M75.jpg"
              alt="car pic"
              className="col-lg-12 col-sm-12"
            />
          </div>
          <div className="mod_name">IS 500</div>
        </div>

        <div className="intro_lex">
          <div className="mar_botm_25 com_header">
            ARRIVING FALL 2021: THE MOST POWERFUL IS EVER
          </div>
          <div className="intro_cont">
            While the IS F SPORT was obsessively engineered to push exhilaration
            to a 10, the first-ever IS 500 F SPORT Performance dials it up to
            11. As the most powerful IS yet, it ushers in a new era of F SPORT
            with a powerful 5.0-liter naturally aspirated V8, a throaty quad
            exhaust and exclusive design upgrades inside and out. To commemorate
            this world premiere, 500 serialized Launch Edition vehicles will
            also be produced, featuring exclusive exterior and interior colors,
            distinctive badging and more.
          </div>
        </div>
        <div className="sec_border"></div>
        <div className="model_vid">
          <div className="model_vid_header">
            IS 500 F SPORT PERFORMANCE LAUNCH EDITION REVEAL VIDEO
          </div>
          <iframe
            className="youtube-iframe"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/I4F8mOV0uv8?rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.lexus.com&amp;widgetid=1"
            id="vid_frame"
          ></iframe>
        </div>

        <div className="sec_border"></div>

        <div className="intro_lex">
          <div className="mar_botm_25 com_header">
            THE FIRST OF THE F SPORT PERFORMANCE LINE
          </div>
          <div className="intro_cont mar_botm_25">
            Destined to get the world’s attention, the 2022 IS 500 F SPORT
            Performance marks the debut of the Lexus F SPORT Performance line.
            In addition to a larger, naturally aspirated 5.0-liter V8 engine for
            the passionate driving enthusiast, it further sets itself apart from
            the standard F SPORT models with exclusive dark chrome trim,
            heart-racing sound, dynamic performance instrumentation and more.
          </div>
          <div className="intro_img">
            <img
              type="desktop"
              src={intro2}
              alt="The F SPORT Performance badge on the IS 500 engine cover"
            />
          </div>
        </div>

        <div className="sec_border"></div>
        <div>
          <div className="com_header mar_botm_25">
            A 5.0 LITER V8 FOR ALL THE SENSES
          </div>
          <div className="intro_cont mar_botm_40">
            The ferocious roar of a naturally aspirated 5.0-liter V8 engine
            amplified by a stacked quad exhaust. There’s no sound quite like it.
            The IS 500 F SPORT Performance boasts a full 472 horsepower* at
            7,100 rpm. And a blistering 0-to-60 time of just 4.5 seconds.* The
            result? A pure performance sport sedan unlike anything you’ve heard.
            Or felt.
          </div>
          <video controls autoPlay="" muted loop>
            <source
              src="https://www.lexus.com/IS500/862B-Exhaust-1400x580-Option-01b.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="sec_border"></div>
      </div>
    );
  }
}

export default Lexus;
