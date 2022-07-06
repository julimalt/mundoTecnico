import Refrigeracion from "../assets/refrigeracion-comercial.webp";
import Electricidad from "../assets/electricidad.webp";
import AireAcondicionadoFamiliar from "../assets/aire-acondicionado-familiar.webp";
import Electronica from "../assets/electronica-linea-blanca.webp";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Button } from "react-bootstrap";

function CursosCards() {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-6">
            <h3 className="mb-3">CURSOS </h3>
          </div> */}
          {/* <div className="col-6 text-right">
            <a
              className="btn btn-info mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <AiOutlineArrowLeft />
            </a>
            <a
              className="btn btn-info mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <AiOutlineArrowRight />
            </a>
          </div> */}
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card carousel-color">
                        <img
                          className="img-fluid heightCursos"
                          alt="100%x280"
                          src={Refrigeracion}
                        />
                        <div className="carousel-color">
                          <h3 className="card-title">
                            REFRIGERACIÓN COMERCIAL
                          </h3>
                          {/* <Button size="lg" className="button botones">
                            Quiero saber más
                          </Button> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card carousel-color">
                        <img
                          className="img-fluid heightCursos"
                          alt="100%x280"
                          src={Electricidad}
                        />
                        <div className="carousel-color">
                          <h4 className="card-title">
                            ELECTRICIDAD EN LA REFRIGERACION
                          </h4>
                          {/* <Button size="lg" className="button botones">
                            Quiero saber más
                          </Button> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card carousel-color">
                        <img
                          className="img-fluid heightCursos"
                          alt="100%x280"
                          src={AireAcondicionadoFamiliar}
                        />
                        <div className="carousel-color">
                          <h4 className="card-title">
                            AIRE ACONDICIONADO FAMILIAR
                          </h4>
                          {/* <Button size="lg" className="button botones">
                            Quiero saber más
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card carousel-color">
                        <img
                          className="img-fluid heightCursos"
                          alt="100%x280"
                          src={Electronica}
                        />
                        <div className="carousel-color">
                          <h4 className="card-title">
                            CURSO ELECTRÓNICA LINEA BLANCA
                          </h4>
                          <Button size="lg" className="button botones">
                            Quiero saber más
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CursosCards;
