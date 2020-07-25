import React from "react";
import "./About.css";
import logo from "../image/rohit.jpg";

const AboutMe = () => {
  return (
      <>
      <div className="about" >
          <span>About Me</span>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img className="my-image" src={logo} alt="Rohit" />
        </div>
        <div className="col-sm-8 data">
          <p>
            My Name is Rohit Thakur. I'm currently pursuing MCA  from VIT Vellore.I was Born
            in Himachal Pradesh and since my father is in army i could say that
            i was raised in India.
          </p>
          <p>
            I did my BCA from D.A.V College Sector-10 Chandigarh. And worked for
            a Network Marketing company for 9 months and build the team of 15
            Student.
          </p>
          <p>
            I can say that I am little bit introvert but you won't find me
            whenever you meet me. And Since I am from Army background i feel
            that it become easy for me to work with other people of different
            states.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
