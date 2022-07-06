import Refrigeracion from "../assets/refrigeracion-comercial.webp";
import Electricidad from "../assets/electricidad.webp";
import AireAcondicionadoFamiliar from "../assets/aire-acondicionado-familiar.webp";
import Electronica from "../assets/electronica-linea-blanca.webp";

import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cursos() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 heightCursos"
          src={Refrigeracion}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-color">CURSO DE REFRIGERACIÓN COMERCIAL</h3>
          <Link to="/refrigeracionComercial">
            <Button size="lg" className="button botones">
              Quiero saber más
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heightCursos"
          src={Electricidad}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-color">
            CURSO DE ELECTRICIDAD EN LA REFRIGERACION
          </h3>
          <Link to="*">
            <Button variant="outline-info" size="lg" className="button">
              Quiero saber más
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heightCursos"
          src={AireAcondicionadoFamiliar}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-color">
            CURSO DE AIRE ACONDICIONADO FAMILIAR
          </h3>
          <Link to="*">
            <Button variant="outline-info" size="lg" className="button">
              Quiero saber más
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 heightCursos"
          src={Electronica}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-color">CURSO ELECTRÓNICA LINEA BLANCA</h3>
          <Link to="*">
            <Button variant="outline-info" size="lg" className="button">
              Quiero saber más
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Cursos;
