import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    overflow: hidden;

    .slideMoodSport {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
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
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-top: 50px;

    @media (min-width: 0px) and (max-width: 1024px){
       height: auto;
    }
`;

export const WrapTimeLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

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
`