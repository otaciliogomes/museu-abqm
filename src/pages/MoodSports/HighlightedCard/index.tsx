import React from 'react';
import * as S from './styles';

export interface PropsCard extends React.HTMLProps<HTMLDivElement> {
    label: string
    img: string
    history: string
}

export const HighlightedCard = ({ label, img, history, ...rest }: PropsCard) => {

	return (
		<S.Container>
			<div className="modality-image">
				<img src={img} alt=""/>
			</div>
			<S.Content>
				<h4>{label}</h4>
				<div>
					<div className='' dangerouslySetInnerHTML={{__html: history}} />
				</div>
			</S.Content>
		</S.Container>
	);
};