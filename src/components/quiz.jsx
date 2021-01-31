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

  fivemin(){
    alert("go get a cup of coffe or just keep on prorastinating, both are fine")
  }

  tenmin(){
    alert("enough time to check ur social media... but Illegitimi non carborundum(don't let those bastards grind you down)")
  }

  twmin(){
    alert("power nap? or write a few lines of useless code")
  }

  thmin(){
    alert("perfect time for a set of HIIT workout, but you might as well spend this time thinking about what to do.")
  }

  indoor(){
    alert("i bet you already are indoor. problem solved");
  }

  outdoor(){
    alert("don't forget to wear a mask hehe");
  }

  anywhere(){
    alert("take a trip to ur fridge. you deserve this.");
  }

  nomove(){
    alert("take a deep breath and carry on ¯\_ツ_/¯")
  }

  low(){
    alert("go do ur grocery or tidy up ur room")
  }

  mod(){
    alert("jump around for 30 minutes in your room as if life is good")
  }

  high(){
    alert("i'd go to a nearby amusement park if i were u")
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
                    <button class="btn btn-primary btn-block" onClick={this.fivemin}>5-10 min</button>
                    <button class="btn btn-primary btn-block" onClick={this.tenmin}>10-20 min</button>
                    <button class="btn btn-primary btn-block" onClick={this.twmin}>20-30 min</button>
                    <button class="btn btn-primary btn-block" onClick={this.thmin}>30+ min</button>
                </div>   
                <div class="col">
                    <br></br>
                    <h4>I want to be...</h4>
                    <button class="btn btn-primary btn-block" onClick={this.indoor}>indoor</button>
                    <button class="btn btn-primary btn-block" onClick={this.outdoor}>outdoor</button>
                    <button class="btn btn-primary btn-block" onClick={this.anywhere}>anywhere but here </button>
                </div>   
                <div class="col">
                    <br></br>
                    <h4>I want the level of intensity to be...</h4>
                    <button class="btn btn-primary btn-block" onClick={this.nomove}>I don't want to move</button>
                    <button class="btn btn-primary btn-block" onClick={this.low}>Low</button>
                    <button class="btn btn-primary btn-block" onClick={this.mod}>Moderate</button>
                    <button class="btn btn-primary btn-block" onClick={this.high}>High</button>
                </div>   
            </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
