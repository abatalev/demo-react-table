import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from "react-bootstrap";

const Navigate = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/table">Table</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigate;