import styled from 'styled-components';
import { ErrorWarning } from '@styled-icons/remix-fill/ErrorWarning';

import { THEME } from '../../global';

export const Container = styled.div`
    background-color: ${THEME.colors.white};

    display: flex;
    width: 100%;
    border-radius: 8px;

    >input { 
        width: 100%;
        border: none;
        background-color: ${THEME.colors.white};
        border-radius: 8px;
        height: 35px;
    }
`;

export const IconWarning = styled(ErrorWarning).attrs({
	color: 'red',
	size: 24
})``;