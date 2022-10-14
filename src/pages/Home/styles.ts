import styled from 'styled-components';
import fullBg from '../../assets/images/full-bg.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;

    > main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    #myVideo {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -1;
    }

    .vh-100 {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 90%;
        /* background-color: #000000;
        background-image: url(${fullBg});
        background-size: 55%;
        background-repeat: no-repeat;
        background-position: center center; */

        #conheça-o-quarto-de-milha,
        #linha-do-tempo,
        #modalidades-esportivas,
        #galeria-dos-ex-presidentes,
        #acervo-histórico,
        #como-colaborar {
            margin: 100px 0 0;
            padding-top: 40px;
        }
    }
`;

export const Content = styled.div`
    max-width: 1280px;
`;

export const ContentLoading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    > h1 {
        color: #f3ca7e;
        margin: 50px 0px 0px 16px;
        font-size: 60px;
        font-family: "Bebas Neue";
        letter-spacing: 1px;

        @media (min-width: 0px) and (max-width: 1024px){
            font-size: 46px;
        }
    }
`
