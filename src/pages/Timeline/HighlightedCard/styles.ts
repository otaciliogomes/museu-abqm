
import React from 'react';
import styled from 'styled-components';
import { CameraOutline } from '@styled-icons/typicons/CameraOutline'
import { THEME } from '../../../global';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    max-width: 1200px;
    max-height: 500px;
    padding: 10px;

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;

        max-height: 1000px;

        width: 80%;

        padding: 20px;
        margin: 0px 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 70%;
    max-width: 300px;

    padding: 10px;

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        height: 100px;
        width: 100%;
        max-width: 100%;

        margin-bottom: 20px;
    }

`;

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 70%;

    padding: 0 10px;
    > * {
        color: ${THEME.colors.white};
        font-weight: 300;
        font-size: 18px;
        word-wrap: break-word;
        font-family: 'SFCompactDisplay';
        line-height: 1.2;

        width: 100%;
        height: auto;
    }

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        width: 100%;
    }
`;


export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    width: 0%;
    height: 300px;
    max-height: 300px;

    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Label = styled.h4`
    color: ${THEME.colors.orange};
    font-weight: bold;
    font-size: 22px;
    margin-top: 20px;
`;

export const Text = styled.p`
    color: ${THEME.colors.white};
    word-wrap: break-all;
    font-family: "Bebas Neue";
`;

export const Title = styled.p`
    color: ${THEME.colors.orange};
    font-family: "Bebas Neue";
    font-weight: bold;
    font-size: 80px;
    margin-top: 20px;
`;

export const Subtitle = styled.p`
    color: ${THEME.colors.white};
    font-size: 30px;
    word-wrap: break-word;
    font-family: "Bebas Neue";
`;

export const WrapperMain = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    margin-right: 20px;

    @media (min-width: 0px) and (max-width: 1024px){
        margin-top: 10px;
    }
`

export const WrapperImage = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    margin-right: 40px;

    > img {
        display: flex;
        object-fit: cover;
        background-repeat: no-repeat;
        
        height: auto;
        max-height: 400px;

        border: 10px solid #FFFFFF;
        border-radius: 4px;
    }
`

export const WrapperBtn = styled.div`
    display: flex;
    width: 100%;
    height: auto;

    justify-content: flex-end;
    align-items: center;

    margin-top: 10px;  
`

export const IconButton = styled(CameraOutline).attrs({
    size: 24,
    backgroundColor: "orange",
    color: "#000000"
})``

export const TextButton = styled.p`
    color: ${THEME.colors.beige100};
    word-wrap: break-all;
    font-family: "Bebas Neue";
`;