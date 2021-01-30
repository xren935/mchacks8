import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/quiz.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="quiz" id="quiz">
        <div className="container">
            <h1>Find the perfect activity that suits your mood!</h1>
            <div class="row">
                <div class="col">
                    <br></br>
                    <h4>I can spend...</h4>
                    <button class="btn btn-primary btn-block">5-10 min</button>
                    <button class="btn btn-primary btn-block">10-20 min</button>
                    <button class="btn btn-primary btn-block">20-30 min</button>
                    <button class="btn btn-primary btn-block">30+ min</button>
                </div>   
                <div class="col">
                    <br></br>
                    <h4>I want to be...</h4>
                    <button class="btn btn-primary btn-block">indoor</button>
                    <button class="btn btn-primary btn-block">outdoor</button>
                    <button class="btn btn-primary btn-block">anywhere but here </button>
                </div>   
                <div class="col">
                    <br></br>
                    <h4>I want the level of intensity to be...</h4>
                    <button class="btn btn-primary btn-block">I don't want to move</button>
                    <button class="btn btn-primary btn-block">Low</button>
                    <button class="btn btn-primary btn-block">Moderate</button>
                    <button class="btn btn-primary btn-block">High</button>
                </div>   
            </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
