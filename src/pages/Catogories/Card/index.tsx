import React from 'react';
import * as S from './styles';
import { dataTopo } from '../../../mock/mock-topo';
import { ResponseItems } from '../../../interface';
interface CardProps {
    onClick: () => void;
	firstItemCard: ResponseItems
}

export const Card = ({ onClick, firstItemCard }: CardProps) => {
	const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'

	return (
		<S.Container onClick={() => onClick()}>
			<ul>
				{dataTopo.map((item) => (
					<li key={item.id}>
						<img 
							src={`${urlImage}/${firstItemCard?.content_files[0]?.file}`}
							alt="" 
						/>
					</li>
				))}
			</ul>
		</S.Container>
	);
};