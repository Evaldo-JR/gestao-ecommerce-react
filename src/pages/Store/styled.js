import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BodyStore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    min-height: 100vh;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 85rem;
    margin: 3rem auto;
`;

export const TitleStore = styled.h1`
    font-size: 2.8rem;
    color: #2f2e41;
    margin-bottom: 3rem;
`;

export const TextStore = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #3f3d56;
`;

export const Label = styled.label`
    display: inline-block;
    font-size: 1.4rem;
    margin: 1.5rem 0 0.2rem;
`;

export const GridPrecoQuantidade = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
`;

export const Input = styled.input`
    border: 1px solid #dedede;
    border-radius: 5px;
    display: block;
    font-size: 1.6rem;
    padding: 1rem;
    width: 100%;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid #dedede;
    border-radius: 5px;
    display: block;
    font-size: 1.6rem;
    resize: none;
    padding: 1rem;
    width: 100%;
`;

export const BtnAdd = styled.input`
    cursor: pointer;
    background-color: #df1759;
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 1rem 0 3rem;
    padding: 1rem;
    width: 100%;

    &:hover {
        background-color: #f71963;
        transition: 0.5s ease;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #bbb;
    margin-bottom: 2rem;
`;

export const LinksStore = styled(Link)`
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

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 4rem;
`;

export const ListItem = styled.li`
    background-color: #fff;
    box-shadow: var(--box-shadow);
    color: #333;
    font-size: 1.4rem;
    display: flex;
    position: relative;
    padding: 1rem;
    margin: 1rem 0;
`;

export const DeleteBtn = styled.button`
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0.3;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;
