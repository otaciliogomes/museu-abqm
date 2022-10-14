
import styled from 'styled-components';
import { THEME } from '../../../global';

export const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;

        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    width: 68%;
    height: 440px;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${THEME.colors.black};

    > img {
        object-fit: cover;
        border-radius: 20px;
        width: 65%;
        @media (min-width: 0px) and (max-width: 1024px){
            width: 40%;
        }
    }
    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
    }
`;

export const ContainerImage = styled.div`
    width: 300px;
    height: 100%;
    
    > img {
        width: 500px;
        height: 100vh;
        max-height: 350px;
        object-fit: cover;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${THEME.colors.beige400};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: -25px;
    background-color: #ffb460;
    z-index: 0;
    padding: 30px 0px 30px 65px;
    max-width: 320px;
    width: 100%;

    > span {
        font-weight: 600;
        font-size: 52px;
        font-family: "Bebas Neue";
        color: ${THEME.colors.brown};
        line-height: 44px;
        
        @media (min-width: 0px) and (max-width: 1200px){
            font-size: 2.5rem;
        }
    }

    .featured-list {
        margin-top: 20px;
        .featured-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;

            > p {
                color: #262424;
                font-weight: bold;
                font-size: 18px;
                word-wrap: break-word;
                margin-left: 10px;
                font-family: 'SFCompactDisplay';

                @media (min-width: 0px) and (max-width: 1200px){
                    font-size: 14px;
                }
            }
        }
    }
    @media (min-width: 0px) and (max-width: 1024px){
        width: 300px;
        max-width: 100%;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    max-width: 30%;
    margin-left: 20px;

    > h2 {
        span { 
            font-family: "Bebas Neue";
            &:first-child {
                font-size: 100px;
                color: #f3ca30;
            }
            &:nth-child(2) {
                color: #7f4a10;
                font-size: 100px;
            }
            &:last-child {
                font-size: 100px;
                color: #f3ca30;
                display: block;
                margin-top: -10px;
            }
        }
    }

    > p {
        color: ${THEME.colors.white};
        font-family: 'SFCompactDisplay';
        font-size: 1rem;
        font-weight: 300;
        line-height: 31px;
        padding-top: 20px;

        strong { 
            display: block;
            font-weight: 500;
            font-size: 1.2rem;
        }

        &:last-child {
            max-width: 85%;
            padding-top: 0;
        }
    }
    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
        max-width: 100%;
    }
`;