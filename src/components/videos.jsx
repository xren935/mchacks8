import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/vid.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, Button } from "react-bootstrap";
import { ReactTinyLink } from "react-tiny-link";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="vid" id="vid">
        <div className="container">
            <br />
            <br />
            <h2><b>Extra Guidance 🌱</b></h2>
            <div class="container">
                <h3>Workout 💦</h3>
                <div class="row">
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=2pLT-olgUJs"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=ml6cT4AZdqI"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=50kH47ZztHs"
                    />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3>Music 🎶</h3>
                <div class="row">
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=z_7MGy6SaMM"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=XULUBg_ZcAU"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=tXghxs1KA8o"
                    />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3>Art 🎨</h3>
                <div class="row">
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=76jpCIZTq2E"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=ZtMdjVk8J1I"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=Q6CgtC-m7EU"
                    />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3>Stretching 🙆🏻‍♀️</h3>
                <div class="row">
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=sTANio_2E0Q&feature=emb_title"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=g13nVd7OLYs"
                    />
                    </div>
                    <div class="col">
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.youtube.com/watch?v=cHqsM952MUo&feature=emb_logo"
                    />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Video;
