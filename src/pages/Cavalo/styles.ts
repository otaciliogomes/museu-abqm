import styled from 'styled-components';
import { THEME } from '../../global';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 65vh;
    overflow: hidden;

    > img {
        margin-right: 10px;
        object-fit: cover;

        height: 100%;
        max-height: 800px;
        max-width: 700px;
        border: 6px solid #FFFFFF; 
        border-radius: 4px; 

        @media (min-width: 0px) and (max-width: 1024px){
            height: 100%;
            width: 100%;
        }
    }

    .conheca-content {
        border-radius: 10px;
        padding: 35px 30px 35px 30px;
        background-color: ${THEME.colors.beige100};
        width: 40%;
        height: 96.5%;
        position: relative;

        &__scroll {
            max-height: 100%;
            overflow-y: scroll; 
            padding-right: 40px;

            &::-webkit-scrollbar {
                width: 6px;   
                border-radius: 20px; 
            }

            &::-webkit-scrollbar-track {
                background: #eeac32;   
                border-radius: 20px; 
            }

            &::-webkit-scrollbar-thumb {
                background-color: #905100;    /* color of the scroll thumb */
                border-radius: 20px;       /* roundness of the scroll thumb */
                border: 1px solid #eeac32;  /* creates padding around scroll thumb */
            }

            > h4 {
                font-family: 'SFCompactDisplay';
                font-weight: 600;
                text-transform: uppercase;
                font-size: 20px;
                line-height: 2rem;
            }

            > * {
                font-family: 'SFCompactDisplay';
                font-weight: 300;
                font-size: 18px;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            @media (min-width: 0px) and (max-width: 1024px){
                width: 100%;
                overflow-y: none; 
            }
        }

        @media (min-width: 0px) and (max-width: 1024px){
            width: 90%;

            margin-top: 10px;
        }
 
    }

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 100%;
        height: auto;
    }
`;

