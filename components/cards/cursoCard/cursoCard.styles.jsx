import styled from "styled-components";
import { fontColors } from "../../../utils/constants/colors.constants";

export const CardContainer = styled.div`
    border: 1px solid ${fontColors.primary};
    border-radius: 27px;
    height: 26rem !important;
    margin: 0rem 1.4rem;
`;

export const CardImage = styled.img`
    border-radius: 1rem 1rem 0rem 0rem;
    height: 50%;
    width: 100%;
`;

export const CardInfo = styled.div`
    height: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
