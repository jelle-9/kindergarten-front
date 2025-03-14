import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarlayout() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav.Link href="#action1" >
            <img src="resources\chicken(2).png" alt="Home" width="30" height="30" />
        </Nav.Link>
        <Navbar.Brand href="#"> Die Hühner Kindergarten </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Nav.Link href="#action2">Anmelden</Nav.Link>
            <NavDropdown title="Mehr" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">Über uns</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                HIER KÖNNTE IHRE WERBUNG STEHEN
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Suchen</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarlayout;