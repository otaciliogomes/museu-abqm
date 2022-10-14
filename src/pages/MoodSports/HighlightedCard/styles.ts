
import React from 'react';
import styled from 'styled-components';
import { PropsCard } from '.';
import { THEME } from '../../../global';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;

    .modality-image {
        width: 35%;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 20px;
        margin-right: 20px;

        img { 
            object-fit: cover;
            width: 100%;
            height: 100vh;
            max-height: 400px;
            box-shadow: 2px 2px 10px #333;
        }
        @media (min-width: 0px) and (max-width: 1024px){
            width: 100%;
            margin: 0px;
        }
    }    

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 65%;
    margin-left: 10px;

    > h4 {
        color: ${THEME.colors.orange};
        font-family: 'Bebas Neue';
        font-weight: 700;
        font-size: 60px;
        letter-spacing: 1px;

       
        @media (min-width: 0px) and (max-width: 1024px){
            font-size: 46px;
            margin-top: 20px;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        > * {
            color: ${THEME.colors.white};
            font-weight: 300;
            font-size: 24px;
            word-wrap: break-word;
            font-family: 'SFCompactDisplay';
            padding-top: 10px;
            line-height: 1.4;

            @media (min-width: 0px) and (max-width: 1024px){
                font-size: 20px;
            }
        }
    }

    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
    }
`;