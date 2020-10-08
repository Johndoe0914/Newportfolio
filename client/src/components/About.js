import React from "react";
import { Zoom, Bounce } from "react-reveal";
import Avatar from "@material-ui/core/Avatar";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <h1>About me</h1>

      <div className='about__info'>
        <Zoom>
          <Avatar
            className='about__image'
            src='https://i.imgur.com/FNFj6z8.jpg'
            alt='Image of Me'
          />
        </Zoom>
        <Bounce>
          <div className='about__description'>
            Welcome to my portfolio, My name is Jonathan Diaz i am 21 years old
            and also a UCF Coding bootcamp graduate .I currently reside in
            Kissimmee, Florida. I am a young motivated individual who wants to
            strive and do his best in everything he does. I would describe
            myself as being a proactive ,dynamic and a team player. My goal is
            to find a great company i can work for to further develop my skills
            as a developer and gain experience as i work. I am also always
            seeking to expand on my current knowledge base. Please feel free to
            email me down below with any questions.
          </div>
        </Bounce>
      </div>
      <Zoom>
        <div className='about__skills'>
          <h3>Skills</h3>
          <hr />
          <div className='about__skillsIcons'>
            <span>
              <img src='https://img.icons8.com/color/96/000000/html-5.png' />
              <h3>Html</h3>
            </span>
            <span>
              <img src='https://img.icons8.com/color/96/000000/css3.png' />
              <h3>CSS 3 </h3>
            </span>
            <span>
              <img src='https://img.icons8.com/color/96/000000/javascript.png' />
              <h3>javascript</h3>
            </span>

            <span>
              <img src='https://img.icons8.com/ios/100/000000/react-native.png' />
              <h3>React </h3>
            </span>
            <span>
              <img src='https://img.icons8.com/color/96/000000/nodejs.png' />
              <h3>Node JS</h3>
            </span>
            <span>
              <img src='https://img.icons8.com/color/96/000000/mongodb.png' />
              <h3>Mongo DB</h3>
            </span>

            <span>
              <img src='https://img.icons8.com/color/96/000000/api-settings.png' />
              <h3> RESTful / </h3>
              <h3>API development</h3>
            </span>
            {/* <span>
              <img src='https://img.icons8.com/color/96/000000/mysql.png' />
              <h3>MySql /</h3>
              <h3>NoSql</h3>
            </span> */}
            <span>
              <img src='https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png' />
              <h3>Firebase </h3>
            </span>
            <span>
              <img src='https://buttercms.com/static/images/tech_banners/ExpressJS.png' />
              <h3>Express </h3>
            </span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
