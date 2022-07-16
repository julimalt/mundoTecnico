import { useRouter } from "next/router";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function NavbarComponent() {
    const router = useRouter();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{ backgroundColor: "#212529" }}>
            <Container>
                <Navbar.Brand
                    style={{ cursor: "pointer", display: "flex", gap: "0.3rem" }}
                    onClick={() => router.push("/")}
                >
                    <img alt="" src="/img/logo.png" width="36" height="28" className="d-inline-block align-top" />
                    <p style={{ fontSize: "1.3rem" }}>MUNDO TÉCNICO</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        {/* <Nav.Link href="/buildingSite">Inicio</Nav.Link> */}
                        {/* <Nav.Link href="#nosotros">Quienes Somos</Nav.Link> */}
                        {/* <Nav.Link href="#tienda">Tienda</Nav.Link> */}
                        {/* <NavDropdown title="Cursos" id="collasible-nav-dropdown">
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
            </NavDropdown> */}
                        {/* <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="outline-info">Iniciar Sesión</Button>
            </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;
