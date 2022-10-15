import React from 'react';
import * as S from './styles';
import { dataTopo } from '../../../mock/mock-topo';
import { ResponseItems } from '../../../interface';
import { v4 } from 'uuid';
interface CardProps {
    onClick: (data:any) => void;
	firstItemCard: any[]
}

export const Card = ({ onClick, firstItemCard }: CardProps) => {
	const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'

	function handleClick() {
		onClick(firstItemCard)
	}

	return (
		<S.Container onClick={() => handleClick()}>
			<ul>
				{[1,2,3,4,5,6].map((item) => (
					<li key={v4()}>
						<img 
							src={`${urlImage}/${firstItemCard[0]?.file}`}
							alt="" 
						/>
					</li>
				))}
			</ul>
		</S.Container>
	);
};