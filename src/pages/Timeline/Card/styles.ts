import styled from 'styled-components'
import { THEME } from '../../../global'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    > span {
        color: ${THEME.colors.white};
    }

    > div {
        background-color: ${THEME.colors.orange};
        width: 100px;
        height: 100px;

        margin: 2px 10px;
    }
`
