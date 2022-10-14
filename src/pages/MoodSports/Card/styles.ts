import styled from 'styled-components';
import { THEME } from '../../../global';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > span {
        color: ${THEME.colors.white};
        text-align: center;
        font-family: 'SFCompactDisplay';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
    }

    > div {
        img { 
            width: 110px;
            height: 110px;
        }
    }
`;