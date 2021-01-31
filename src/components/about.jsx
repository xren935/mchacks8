import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/about.css";
import Aos from "aos";
import "aos/dist/aos.css";

// var desc = "________ is a mental health and wellness application that encompasses a variety of essential features. It aims to lift your mood through simple, relaxing, and effective tasks. ";
var desc = "well... sometimes things just don't work out, and this project is an example. But that's okay. \
Take a deep breath, and remind yourself that others, including the builder of this website, are also struggling with something at this very moment. \
(a bit dark, but I hope this makes you feel less lonely)."
var desc2 = "Just like how sometimes things don't go as planned in life, the buttons on this website simply do <u>not</u> do what you think they should do. Click on them and see what they'll tell you."

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
            <h2><b>About Us 🌱</b></h2>
            <p>{desc}</p>
            <p>{desc2}</p>
        </div>
      </div>
    );
  }
}

export default About;
