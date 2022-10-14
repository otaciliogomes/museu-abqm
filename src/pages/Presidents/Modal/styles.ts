import styled from 'styled-components';
import Moldura from '../../../assets/images/presidentes/moldura.png';

export const Container = styled.div`
    width: 95%;
    display: flex;
    margin: 0 auto;
`;

export const Content = styled.div`
    margin: 10px;
`;

export const ContentInfo = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const ModalImage = styled.div`
        background: url(${Moldura});
        background-size: 84%;
        background-repeat: no-repeat;
        width: 100%;
        max-width: 400px;
        display: flex;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: -35px;

        img {
            object-fit: cover;
            width: 53%;
            padding: 65px 66px 75px 0;
        }
`;

export const PresidentHistory = styled.div`
    width: 40%;
    padding-right: 40px;
    p { 
        color: #262424;
        font-weight: 300;
        font-size: 18px;
        word-wrap: break-word;
        font-family: 'SFCompactDisplay';
        padding-top: 20px;
        line-height: 1.6;
    }
`;

export const PresidentGroups = styled.div`
    width: 33%;

    ul { 
        list-style-type: none;
        padding-top: 20px;
        max-height: 40vh;
        overflow-y: scroll;

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


        li { 
            color: #262424;
            font-weight: 300;
            font-size: 14px;
            word-wrap: break-word;
            font-family: 'SFCompactDisplay';
            line-height: 1.6; 
        }
    }
`;

export const LabelContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`;

export const Title = styled.h4`
    font-weight: bold;
    width: 100%;
    font-family: 'SFCompactDisplay';
    color: #563300;
    font-size: 30px;
    line-height: 1;
`;

export const TitleYear = styled.h5`
    color: #262424;
    font-weight: bold;
    width: 100%;
    font-family: 'SFCompactDisplay';
    color: #262424;
    font-size: 20px;
`;

export const Label = styled.span``;

export const CloseModal = styled.div`
    color: #000000;
    font-weight: bold;
    font-family: 'SFCompactDisplay';
    position: absolute;
    z-index: 999;
    top: -88px;
    background: #fcca91;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    right: 0%;
    cursor: pointer;
    box-shadow: 1px 1px 5px #000;
`;