import styled from 'styled-components';
import { THEME } from '../../../global';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    ul {
        display: flex;
        li { 
            width: 192px;
    height: 140px;

            img {
                width: 100%;
                height: 150px;
                object-fit: cover;
            }
        }
    }
`;

export const Content = styled.img`
    width: 195px;
    height: 200px;
    margin: 0px;
    object-fit: cover;
    box-sizing: border-box;
    box-shadow: -1px 1px 5px #ffffff;
`;

export const Label = styled.span`
    color: ${THEME.colors.white};
`;