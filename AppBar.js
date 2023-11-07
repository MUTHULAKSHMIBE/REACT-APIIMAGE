import { Button, Container, Nav, Navbar } from "react-bootstrap";
export default function AppBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Image Fetch</Navbar.Brand>
        <Nav className="d-none d-md-flex">
          <Nav.Item>HOME</Nav.Item>
        </Nav>
        <Button variant="" className="d-flex d-md-none">
          <i className="bi bi-list fs-1"></i>
        </Button>
      </Container>
    </Navbar>
  );
}