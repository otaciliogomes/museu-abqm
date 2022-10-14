import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .slideMoodSport {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .customDots {
        background-color: red;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 50px;
    gap: 19px;

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: row;

        flex-wrap: nowrap;

        overflow-x: scroll;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .hiddenScrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .hiddenScrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;