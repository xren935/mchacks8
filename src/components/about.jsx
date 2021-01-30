import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/about.css";
import Aos from "aos";
import "aos/dist/aos.css";

var desc = "________ is a mental health and wellness application that encompasses a variety of essential features. It aims to lift your mood through simple, relaxing, and effective tasks. ";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
            <h2><b>About Us</b></h2>
            <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default About;
