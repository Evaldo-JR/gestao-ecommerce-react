import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BodyHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 2% 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    &.grid-1 {
        max-width: 130rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 5%;
        padding: 0 3%;
    }

    &.grid-2 img {
        width: min(90rem, calc(70% + 100px));
        height: auto;
        align-items: center;
        justify-content: center;
    }
`;

export const TitleHome = styled.h1`
    font-size: 2.8rem;
    color: #2f2e41;
`;

export const TextHome = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #3f3d56;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
`;

export const LinksHome = styled(Link)`
    display: block;
    width: 10rem;
    text-align: center;
    font-size: 1.4rem;
    margin: 2rem auto;
    background-color: #df1759;
    padding: 1rem 0;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: #f71963;
        transition: 0.5s ease;
    }
`;
