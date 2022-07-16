import { useRef } from "react";
import Glider from "react-glider";

import CursoCard from "../../cards/cursoCard/cursoCard.component";
import { CursosContainer } from "./cursosCarrousel.styles";

import { cursos } from "./cursos";

const CursosCarrousel = () => {
    const gliderRef = useRef();

    const mobileView = false;

    return (
        <CursosContainer>
            <Glider
                ref={gliderRef}
                slidesToShow={4}
                slidesToScroll={2}
                draggable={true}
                rewind={true}
                hasArrows={true}
                dragVelocity={1}
            >
                {cursos.map((curso) => (
                    <CursoCard key={curso.id} {...curso} />
                ))}
            </Glider>
        </CursosContainer>
    );
};

export default CursosCarrousel;
