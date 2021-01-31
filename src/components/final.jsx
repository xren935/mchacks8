import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/about.css";
import Aos from "aos";
import "aos/dist/aos.css";

var desc = "Congratulations on finishing browsing through another useless website! the main takeaway: you're not alone if you think life is hard and unexpected, but there are always people with whom you can turn lemons into lemonade.*smile emoji*"
class Final extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
            <h2><b>Finally...🌱</b></h2>
            <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Final;
