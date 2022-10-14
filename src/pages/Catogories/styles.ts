import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .slideMoodSport {
        width: 100%;
    }

    h3 {
        width: 100%;
        color: #FFFFFF;
        font-family: 'SFCompactDisplay';
        font-size: 30px;
        font-weight: 400;
        margin-top: -40px;
        padding-bottom: 10px;
    }
    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 60px;
`;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`;