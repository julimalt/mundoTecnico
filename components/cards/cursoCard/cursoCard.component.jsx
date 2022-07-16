import { Button } from "react-bootstrap";

import { CardContainer, CardImage, CardInfo } from "./cursoCard.styles";

const CursoCard = ({ title, img }) => {
    return (
        <CardContainer>
            <CardImage className="img-fluid" alt="100%x280" src={img} />
            <CardInfo>
                <h4 className="card-title">{title}</h4>
                <Button size="lg" className="button botones">
                    Quiero saber más
                </Button>
            </CardInfo>
        </CardContainer>
    );
};

export default CursoCard;
