import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="30"
            heightCursos="35"
            className="d-inline-block align-top"
          />
          MUNDO TÉCNICO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Quienes Somos</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <NavDropdown title="Cursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                CURSO DE REFRIGERACIÓN COMERCIAL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CURSO DE ELECTRICIDAD EN LA REFRIGERACION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CURSO DE AIRE ACONDICIONADO FAMILIAR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                CURSO ELECTRÓNICA LINEA BLANCA
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-info">Iniciar Sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
