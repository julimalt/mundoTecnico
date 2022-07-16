import styled from "styled-components";
import { fontColors } from "../../../utils/constants/colors.constants";

export const CursosContainer = styled.div`
    width: 100%;
    padding: 2rem;
    margin: 4rem 0rem;

    & .glider-contain {
        width: 90%;
    }

    // & .glider-track {
    //     gap: 2rem;
    // }

    & .glider-next {
        color: ${fontColors.primary};
        margin-left: 1rem;
    }

    & .glider-prev {
        color: ${fontColors.primary};
        margin-right: 1rem;
    }

    @media screen and (max-width: 900px) {
        padding: 20px;
    }
`;
