import styled from 'styled-components'
import { THEME } from '../../../global'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: center;

    width: 40px;
    margin: 0 30px;

> span { 
    color: ${THEME.colors.white};
    font-size: 20px;
}
`