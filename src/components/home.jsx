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
                <Navbar.Brand href="#home">🌱 Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
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
