import Card from "react-bootstrap/Card";

function RefrigeracionComercial() {
    return (
        <>
            <Card bg="dark" border="info">
                <Card.Img style={{ height: "30vh" }} variant="top" alt="banner" src="/img/banner.jpg" />
                <div>
                    <h1 className="titular">CURSO DE REFRIGERACIÓN COMERCIAL</h1>
                    <p className="texto">
                        Te invitamos a formar parte de Mundo Técnico emprendiendo el curso Refrigeración Comercial
                        PROFESIONAL. <br /> Dirigido a todas aquellas personas que con conocimientos previos, tengan
                        interés en la formación como técnicos en refrigeración comercial para dedicarse, tanto de manera
                        particular, iniciando su propio emprendimiento o también dirigido a aquellas empresas que
                        quieran la certificación de su equipo técnico en la instalación y mantenimiento de equipos de
                        refrigeracion comercial para la industria. <br /> Reparadores e instaladores que necesiten
                        perfeccionarse en la actividad. <br /> Personas que se dediquen a otro tipo de oficios como
                        instaladores eléctricos, de alarmas, o cámaras de seguridad que quieran complementar el servicio
                        que ofrecen a sus clientes. <br />
                        Ofrecemos la metodología de clases presenciales dos veces por semana de 18:30hs. a 20:30hs. a lo
                        largo de 3 meses, con complementos online disponibles en nuestra web para los alumnos
                        inscriptos. <br /> “Si crees que puedes, ya estás a medio camino” Comunícate con nosotros para
                        saber más del curso y como anotarte!
                    </p>
                    <Card.Img
                        variant="top"
                        style={{ height: "50vh", width: "50%", alignContent: "center" }}
                        alt="Imagen principal"
                        src="/img/curso-refrigeracion-comercial.webp"
                    />
                    <p className="texto">
                        Trabajar a conciencia es nuestro objetivo “La recompensa por un trabajo bien echo es más
                        trabajo” El curso cuenta con un examen previo de nivelación en el que deberás tener conceptos de
                        electricidad y aire acondicionado sólidos, caso contrario te invitamos a que te inscribas en
                        nuestro curso de Electricidad y Aire Acondicionado Temario: Introducción de la refrigeración
                        Manejos de herramientas y componentes Tipos de equipos comerciales y su aplicación Manejos de
                        instrumentos de medición Presión, temperatura Vacío, presurización y soldadura Circuito básico
                        de refrigeración Compresor, condensador, evaporador, capilares Funcionamiento Recarga de
                        refrigerante Manejo de instrumental de medición eléctricos y su función Cámaras frigoríficas de
                        media T° (fallas eléctricas y mecánicas) Cámaras frigoríficas de baja T° (fallas eléctricas y
                        mecánicas) Tableros de abastecimiento (fallas eléctricas, electrónicas) Heladeras Comerciales
                        (fallas mecánicas y eléctricas) Manejo de refrigerantes y aceites Armado y desarmado de cámaras
                        Funcionamiento optimo de un equipo de frío Fabricación de recuperadora de refrigerante Controles
                        Te invitamos a formar parte de Mundo Técnico haciendo clic en la imagen
                    </p>
                </div>
            </Card>
        </>
    );
}

export default RefrigeracionComercial;
