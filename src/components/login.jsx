import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/signup.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import login from '../static/img/login.png';

Aos.init();
class Login extends React.Component {
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
                    <div class="col">
                        <img src={login} id="login-img"></img>
                    </div>
                    <div class="col">
                        <h1><b>Welcome Back (username)!</b></h1>
                        <h4><b>Please login to continue</b></h4>
                        <hr/>
                        <br/>
                        <div className="form-group">
                            <h5>Username:</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="mentalhealth@gmail.com"
                            />
                            <br/>
                            <h5>Password:</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Emma123"
                            />
                            <br />
                            <br />
                            <Button variant="outline-success">Log in</Button>
                            <br />
                            <br />
                            <a href="https://www.google.ca"><u>Forgot password?</u></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
