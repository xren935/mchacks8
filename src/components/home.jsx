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

  render() {
    Aos.init({ duration: 3000 });
    return (
        <div className="home" id="home" aos-data="fade-in">
            <div className="background">
              <h1>INSERT NAME HERE</h1>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">🌱 Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#extra">Extra Help</Nav.Link>
                  </Nav>
                  <Form inline>
                    <Button variant="outline-success">Sign up</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-success">Log in</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
        </div>
    );
  }
}

export default Home;
