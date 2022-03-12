import {
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
  GrYoutube,
} from "react-icons/gr";

import { Button } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <img
                  alt=""
                  src="/logo.png"
                  width="50"
                  className="d-inline-block align-top"
                />
                MUNDO TÉCNICO
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Menú<span></span>
                </h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Inicio</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Quienes somos</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Tienda</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Cursos</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Contacto</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <Button
                  variant="outline-info"
                  size="lg"
                  className="button d-block mx-auto"
                  style={{ marginTop: "3em" }}
                >
                  Contactanos!
                </Button>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Contacto<span></span>
                </h5>

                <p>+54 11-3398-0818</p>
                <p>Av. Jonte 5378</p>
                <p>Villa del Parque, CABA</p>
                <ul class="social-footer2">
                  <li class="">
                    <a
                      title="youtube"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.youtube.com/"
                    >
                      <GrYoutube />
                    </a>
                  </li>
                  <li class="">
                    <a
                      href="https://www.facebook.com/emete.mt.10"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Facebook"
                    >
                      <GrFacebookOption />
                    </a>
                  </li>
                  <li class="">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Twitter"
                    >
                      <GrTwitter />
                    </a>
                  </li>
                  <li class="">
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

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>2023 BY MUNDOTECNICO. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
