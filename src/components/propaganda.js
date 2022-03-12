import { Container, Row, Col } from "react-bootstrap";
import Marketing from "../assets/marketing.jpg";

function Propaganda() {
  return (
    <Container>
      <Row className="intro">
        <Col sm={5}>
          <h1 className="titular">DISTRIBUIDORES DE AIRE ACONDICIONADO </h1>
          <h5 className="texto">
            Contamos con variedad de marcas y modelos disponibles. Consultanos
            ahora!
          </h5>
        </Col>
        <Col>
          <img className="heightPropaganda" src={Marketing} alt="propaganda" />
        </Col>
      </Row>
    </Container>
  );
}
export default Propaganda;
