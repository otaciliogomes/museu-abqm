import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 5px;
`;

export const Title = styled.h4`
    font-size: 60px;
    font-family: "Bebas Neue";
    color: rgb(126, 84, 37);
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid rgb(126, 84, 37);
    margin-bottom: 20px;

    &.title-column-3 {
        border-bottom: none !important;
        text-transform: inherit !important;
        font-size: 30px !important;
        text-align: left !important;
        padding-top: 7%;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;

    margin-top: 10px;
`;

export const LabelContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    width: 70%;
    margin-right: 30px;
    font-family: 'SFCompactDisplay';
    font-size: 20px;
    font-weight: 300;

    &.column-1 {
        width: 31%;
    }
    &.column-2 {
        width: 30%;
        padding-right: 50px;
        padding-top: 4.75%;
    }
    &.column-3 {
        width: 85%;
        height: 80vh;
        overflow-x: hidden;
        overflow-y: scroll;
        align-items: center;
        justify-content: flex-start;
        padding-right: 75px;

        &::-webkit-scrollbar {
            width: 6px;   
            border-radius: 20px; 
        }

        &::-webkit-scrollbar-track {
            background: #9b9c9e;   
            border-radius: 20px; 
        }

        &::-webkit-scrollbar-thumb {
            background-color: #000000;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 1px solid #9b9c9e;  /* creates padding around scroll thumb */
        }
    }
`;


export const Label = styled.span<{
    active?: boolean
}>`
    cursor: pointer;
    font-family: 'SFCompactDisplay';
    color: ${({ active }) => active ? '#000' : '#ADAEB0'};
    padding-bottom: 10px;

    &.column-1__item {
        display: flex;
        align-items: center;

        img {
            width: 20px;
        }
    }

    &.text-column-3 {
        text-align: left;
        color: #6b6b6b;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 15px;
    }
`;

export const CloseModal = styled.div`
    color: #000000;
    font-weight: bold;
    font-family: 'SFCompactDisplay';
    position: absolute;
    z-index: 999;
    top: 5px;
    background: #D9D9D9;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    right: 3%;
    cursor: pointer;
    box-shadow: 1px 1px 5px #000;
`;