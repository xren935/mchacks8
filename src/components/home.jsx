import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

Aos.init();

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  signup() {
    alert("your backend/database engineer is offline :( some work just can't be done");
  }

  login() {
    alert("sometimes things just don't work, but that's okay");
  }

  render() {
    Aos.init({ duration: 3000 });
    return (
        <div className="home" id="home" aos-data="fade-in">
            <div className="background">
              <h1>Actimind<h5>...or just couch potato, no stress</h5></h1>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">🌱 Actimind</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#extra">Extra Help</Nav.Link>
                  </Nav>
                  <Form inline>
                    <Button variant="outline-success" onClick={this.signup}>Sign up</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-success" onClick={this.login}>Log in</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
        </div>
    );
  }
}

export default Home;
