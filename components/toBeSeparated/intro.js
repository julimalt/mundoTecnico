import { Container, Row, Col, Button } from "react-bootstrap";
import { fontColors } from "../../utils/constants/colors.constants";

function Intro({ router }) {
    return (
        <Container>
            <Row className="intro">
                <Col sm={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h1 className="typing-demo" style={{ color: fontColors.primary, marginBlock: "0rem" }}>
                        #SOMOSTECNICOS
                    </h1>
                    <h5 className="texto">
                        Viví la experiencia de profesionalizarte técnicamente, distintos cursos de perfeccionamiento
                        disponibles, consultanos!
                    </h5>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Button
                            // variant="outline-info"
                            size="lg"
                            className="button d-block botones"
                            onClick={() => router.push("/contacto")}
                        >
                            Contactanos!
                        </Button>
                    </div>
                </Col>
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <img className="heightIntro" src="/img/hashtag.png" alt="hashtag" />
                </Col>
            </Row>
        </Container>
    );
}
export default Intro;
