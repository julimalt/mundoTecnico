import {
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
  GrYoutube,
} from "react-icons/gr";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <img
                  alt=""
                  src="/logo.png"
                  width="50"
                  className="d-inline-block align-top"
                />
                MUNDO TÉCNICO
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Menú<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Inicio</a>
                    </div>
                  </li>
                  {/* <li>
                    <div className="thumb-content">
                      <a href="#.">Quienes somos</a>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="thumb-content">
                      <a href="#.">Tienda</a>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="thumb-content">
                      <a href="#.">Cursos</a>
                    </div>
                  </li> */}
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Contacto</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <Link style={{ textDecoration: "none" }} to="/contacto">
                  <Button
                    size="lg"
                    className="button d-block mx-auto botones"
                    style={{ marginTop: "3em" }}
                  >
                    Contactanos!
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contacto<span></span>
                </h5>

                <p>+54 11-3398-0818</p>
                <p>Av. Jonte 5378</p>
                <p>Villa del Parque, CABA</p>
                <ul className="social-footer2">
                  <li className="">
                    <a
                      title="youtube"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.youtube.com/"
                    >
                      <GrYoutube />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.facebook.com/emete.mt.10"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Facebook"
                    >
                      <GrFacebookOption />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Twitter"
                    >
                      <GrTwitter />
                    </a>
                  </li>
                  <li className="">
                    <a
                      title="instagram"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.instagram.com/"
                    >
                      <GrInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>2023 BY MUNDOTECNICO. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
