import React from 'react';
import * as S from './styles';
import Apartacao from '../../../assets/icons/modalidades/apartacao.png';

interface CardProps {
    label: string
	onClick: () => void
	image: string
}



export const Card = ({ label, onClick, image }: CardProps) => {
	return (
		<S.Container onClick={() => onClick()}>
			<div>
				<img src={image || Apartacao} alt={label} />
			</div>
			<span>{label}</span>
		</S.Container>

	);
};