import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { THEME } from '../../global';

export const Container = styled.div`
    position: sticky;
    top: 45px;
    left: 90%;
    cursor: pointer;
    z-index: 999;
`;

export const Icon = styled(Menu).attrs({
	color: THEME.colors.beige700,
	size: 38
})``;
