import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/signup.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

Aos.init();
class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
        <div className="signup" id="signup">
            <div class="container">
                <div class="row">
                    <div class="col">1</div>
                    <div class="col">
                        <h1><b>Let's Get Started</b></h1>
                        <h4><b>Make mental health matter</b></h4>
                        <hr/>
                        <br/>
                        <div className="form-group">
                            <h5>Email:</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="mentalhealth@gmail.com"
                            />
                            <br/>
                            <h5>Username:</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Emma123"
                            />
                            <br/>
                            <h5>Password:</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="***********"
                            />
                            <br />
                            <br />
                            <Button variant="outline-success">Sign up</Button>
                        </div>
                    </div>
                    <div class="col">3</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Signup;
