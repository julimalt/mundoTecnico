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
      <h1 class="section-header">CONTACTANOS</h1>

      <div class="contact-wrapper">
        <form id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                name="Email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            placeholder="Mensaje"
            name="message"
            required
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <GrSend />
          </button>
        </form>

        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa fa-map-marker fa-2x">
                <span class="contact-text place">Av. Jonte 5378, CABA</span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-phone fa-2x">
                <span class="contact-text phone">
                  <a href="tel:+54 11-3398-0818" title="Give me a call">
                    +54 11-3398-0818
                  </a>
                </span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-envelope fa-2x">
                <span class="contact-text gmail">
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

          <ul class="social-media-list">
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <GrTwitter />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <GrFacebookOption />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <GrYoutube />
              </a>
            </li>
          </ul>

          <div class="copyright">
            &copy; 2023 BY MUNDOTECNICO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
