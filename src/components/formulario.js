import {
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
  GrYoutube,
  GrSend,
} from "react-icons/gr";

function Formulario() {
  return (
    <section id="contact">
      <h1 className="section-header">CONTACTANOS</h1>

      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="Email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="Mensaje"
            name="message"
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <GrSend />
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Av. Jonte 5378, CABA</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:+54 11-3398-0818" title="Give me a call">
                    +54 11-3398-0818
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a
                    href="mailto:info@mundotecnico.com"
                    title="Send me an email"
                  >
                    info@mundotecnico.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul className="social-media-list">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="contact-icon"
              >
                <GrInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="contact-icon"
              >
                <GrTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/emete.mt.10"
                target="_blank"
                className="contact-icon"
              >
                <GrFacebookOption />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="contact-icon"
              >
                <GrYoutube />
              </a>
            </li>
          </ul>

          <div className="copyright">
            &copy; 2023 BY MUNDOTECNICO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
