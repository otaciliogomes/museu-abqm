import React from 'react';
import * as S from './styles';

type MenuType = {
    handleShowMenu: () => void
}

export const Menu = ({ handleShowMenu }: MenuType) => {

	return (
		<S.Container onClick={() => handleShowMenu()}>
			<S.Icon />
		</S.Container>
	);
};