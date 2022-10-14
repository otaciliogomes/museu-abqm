import styled from 'styled-components'
import Moldura from '../../../assets/images/presidentes/moldura.png';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 352px;
    cursor: pointer;
    /* background: url(${Moldura}); */
    background-size: contain;
    padding-top: 50px;
    background-repeat: no-repeat;
    
    > img {
        object-fit: contain;
        display: flex;
        width: 100%; 
        height: 100vh;
        max-height: 270px;
    }

    > div {


        > h4 {
            color: #FFFFFF;
            font-weight: 500;
            font-size: 20px;
            text-align: center;
            font-family: 'SFCompactDisplay';
            padding-top: 60px;
            width: 90%;
            height: 352px;
            margin: 0 auto;
        }
    }
`;