import { Container, Row, Col, Button } from "react-bootstrap";
import Hashtag from "../assets/hashtag.png";

function Intro() {
  return (
    <Container>
      <Row className="intro">
        <Col sm={6}>
          <h1 className="titular typing-demo">#SOMOSTECNICOS </h1>
          <h5 className="texto">
            Viví la experiencia de profesionalizarte técnicamente, distintos
            cursos de perfeccionamiento disponibles, consultanos!
          </h5>
          <Button
            variant="outline-info"
            size="lg"
            className="button d-block mx-auto"
          >
            Contactanos!
          </Button>
        </Col>
        <Col>
          <img className="heightIntro" src={Hashtag} alt="hashtag" />
        </Col>
      </Row>
    </Container>
  );
}
export default Intro;
