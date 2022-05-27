import styled, { keyframes } from "styled-components";

const animation = keyframes`
    to {
        background-position: 200% center;
    }
`;

export const UnderConstructionTitle = styled.div`
    // font-family: "Big Shoulders Display", cursive;
    font-size: 5rem;
    margin-top: 4rem;
    animation: ${animation} 3s ease-out infinite;

    color: #fff;
    background: linear-gradient(to right, #1ed9ad 40%, #085e4a 50%, #085e4a 55%, #1ed9ad 70%);
    background-clip: text;
    background-size: 200% auto;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 1000px) {
        font-size: 2.8rem;
    }
`;
