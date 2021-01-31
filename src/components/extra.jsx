import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/extra.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, Button } from "react-bootstrap";
import connex from '../static/img/connex.png';
import talk from '../static/img/talk.png';
import heal from '../static/img/heal.png';
import ontario from '../static/img/ontario.png';
import hub from '../static/img/hub.png';
import here2help from '../static/img/here2help.png';

class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="extra" id="extra">
        <div className="container">
            <br />
            <br />
            <h2><b>Extra Guidance 🌱</b></h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={here2help} />
                    <Card.Body>
                        <Card.Title>heretohelp</Card.Title>
                        <Card.Text>
                          Here to help you find quality information, learn new skills, and connect with key resources in BC.
                        </Card.Text>
                        <Button variant="primary"><a href="https://www.heretohelp.bc.ca/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hub} />
                    <Card.Body>
                        <Card.Title>Student Wellness Hub</Card.Title>
                        <Card.Text>
                         McGill Student Wellness Hub McGill offers a wide variety of services to support student success and well-being. 
                        </Card.Text>
                        <Button variant="primary"><a href="https://www.mcgill.ca/wellness-hub/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={heal} />
                    <Card.Body>
                        <Card.Title>Talk 4 Healing</Card.Title>
                        <Card.Text>
                         A culturally grounded, fully confidential helpline for Indigenous women available in 14 languages all across Ontario.
                        </Card.Text>
                        <Button variant="primary"><a href="https://www.talk4healing.com/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={connex} />
                    <Card.Body>
                        <Card.Title>ConnexOntario</Card.Title>
                        <Card.Text>
                        ConnexOntario provides free and confidential health services information for people experiencing problems with alcohol and drugs, mental illness or gambling by connecting them with services in their area.
                        </Card.Text>
                        <Button variant="primary"><a href="https://www.connexontario.ca/en-ca/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ontario} />
                    <Card.Body>
                        <Card.Title>211 Ontario</Card.Title>
                        <Card.Text>
                        211 Ontario is your primary source of information on government and community-based social services. Things are changing quickly during this unusual time, but our team is committed to providing accurate and up-to-date information to Ontarians about responses to the novel coronavirus.
                        </Card.Text>
                        <Button variant="primary"><a href="https://www.211oncovid19.ca/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div class="col">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={talk} />
                    <Card.Body>
                        <Card.Title>Good2Talk</Card.Title>
                        <Card.Text>
                            Good2Talk provides confidential support services for post-secondary students in Ontario and Nova Scotia. Choose an option below for more info.
                        </Card.Text>
                        <Button variant="primary"><a href="https://good2talk.ca/">Learn More</a></Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Extra;
