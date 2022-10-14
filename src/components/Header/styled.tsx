import styled from 'styled-components';
import { THEME } from '../../global';

export const Container = styled.div`
    width: 100%;
    margin: -40px auto 90px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 240px;
        height: 160px;
        align-self: center;
        position: relative;
        right: 44%;
        top: 50px;

        @media (min-width: 0px) and (max-width: 1024px){
            align-self: center;
            right: 50px;
            top: 50px;
        }
    }

    @media (min-width: 0px) and (max-width: 1024px){
        justify-content: center;
         align-items: center;

        margin: 20px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 20px;

    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
        margin: 0px;
    }
`;

export const WhiteLogo = styled.div`
    width: 100px;

    img {
        width: 100px;
    }

    @media (min-width: 0px) and (max-width: 1024px){
        display: none;
    }
`;

export const MainLogo = styled.div`

`;

export const Title = styled.h2`
    color: #f3ca7e;
    margin-left: 10px;
    font-size: 60px;
    font-family: "Bebas Neue";
    letter-spacing: 1px;

    @media (min-width: 0px) and (max-width: 1024px){
        font-size: 46px;
    }
`;
export const SubTitle = styled.h3`
    color: ${THEME.colors.white};
    margin-left: 10px;
    font-size: 20px;
    font-family: 'SFCompactDisplay';
    font-weight: 300;
    padding: 15px 0 50px;
    line-height: 2rem;
    max-width: 87%;

    @media (min-width: 0px) and (max-width: 1024px){
        font-size: 16.5px;
        padding-bottom: 30px;
    }
`;