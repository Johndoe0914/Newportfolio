import React from "react";
import { Zoom, Bounce, Flip } from "react-reveal";
import "./Landing.css";
import Particles from "react-particles-js";

const Landing = () => {
  return (
    <div className='landing'>
      <Zoom>
        <div className='text'>
          <strong>
            <h1>Welcome Stranger,</h1>
          </strong>
          <br />
          <strong>
            <h1>My name is </h1>
            <h1 style={{ color: "red" }}>Jonathan Diaz</h1>
          </strong>

          <br />
          <strong>
            <h1>Junior Full Stack Developer</h1>
          </strong>
          <br />
          <a href='#about'>
            <button>View More -></button>
          </a>
        </div>
      </Zoom>
      <div className='landing__Image'></div>
      {/* <img
        className='landing__Image'
        src='https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-High-Resolution-Images.jpg'
      /> */}
      <Flip left>
        <div className='overlay'>
          <Particles
            className='particles'
            params={{
              particles: {
                number: {
                  value: 160,
                  color: "red",
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: true,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                  },
                },
              },
            }}
          />
        </div>
      </Flip>
    </div>
  );
};

export default Landing;
