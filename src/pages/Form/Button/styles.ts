import styled from 'styled-components';
import { THEME } from '../../../global';

export const Container = styled.button`
    background-color: #ffd270;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 32px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
    }
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input[type="file"] { 
        opacity: 0;
        position: absolute;
    }
`;

export const Label = styled.span`
    color: #626a7b;
    font-size: 18px;
    font-family: 'SFCompactDisplay';
    font-weight: 200;
`;