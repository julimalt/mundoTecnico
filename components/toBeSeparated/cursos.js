import { useRouter } from "next/router";
import { Carousel, Button } from "react-bootstrap";

function Cursos() {
    const router = useRouter();

    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100 heightCursos" src="/img/refrigeracion-comercial.webp" alt="First slide" />
                <Carousel.Caption>
                    <h3 className="carousel-color">CURSO DE REFRIGERACIÓN COMERCIAL</h3>

                    <Button
                        size="lg"
                        className="button botones"
                        onClick={() => router.push("/refrigeracion-comercial")}
                    >
                        Quiero saber más
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 heightCursos" src="/img/electricidad.webp" alt="Second slide" />
                <Carousel.Caption>
                    <h3 className="carousel-color">CURSO DE ELECTRICIDAD EN LA REFRIGERACION</h3>
                    <Button variant="outline-info" size="lg" className="button" onClick={() => router.push("/")}>
                        Quiero saber más
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightCursos"
                    src="/img/aire-acondicionado-familiar.webp"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-color">CURSO DE AIRE ACONDICIONADO FAMILIAR</h3>
                    <Button variant="outline-info" size="lg" className="button" onClick={() => router.push("/")}>
                        Quiero saber más
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 heightCursos"
                    src="/img/electronica-linea-blanca.webp"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-color">CURSO ELECTRÓNICA LINEA BLANCA</h3>
                    <Button variant="outline-info" size="lg" className="button" onClick={() => router.push("/")}>
                        Quiero saber más
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Cursos;
