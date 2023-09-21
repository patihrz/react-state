import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import StackDev from '../Img/stackDev.png';
import Button from 'react-bootstrap/Button';
import './Navbar.css'


function NavbarComp({navValue}) {
  return (
    <>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={StackDev}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            StackDev
          </Navbar.Brand>
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Promo</Nav.Link>
              <Nav.Link href="#">Layanan</Nav.Link>
              <Button variant="outline-dark" href='login.php'>Login</Button>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;