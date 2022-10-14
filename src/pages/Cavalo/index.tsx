import React from 'react';
import { ResponseItems } from '../../interface';

import * as S from './styles';

type CavaloProps = {
	cavalo: ResponseItems
}

export const Cavalo = ({ cavalo }: CavaloProps) => {
	const urlImage = 
		`https://adm.abqm.net.br:4431/app/webroot/img/content_files/${cavalo.content_files[0]?.file}`

	return (
		<S.Container>
			<img
				src={urlImage}
				alt='cavalo quarto de milha'
			/>
			<div className="conheca-content">
				<div className="conheca-content__scroll" id="textConhecaOQuartoDeMilha">
					<div dangerouslySetInnerHTML={{__html: cavalo?.text}} />
				</div>
			</div>
		</S.Container>
	);
};