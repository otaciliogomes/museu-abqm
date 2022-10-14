import React from 'react';
import * as S from './styles';
import Computer from '../../../assets/icons/icon-compatibilidade.png';
import UserAstronaut from '../../../assets/icons/icon-vr.png';
import Mouse from '../../../assets/icons/icon-use-mouse.png';
import FeatureImg from '../../../assets/images/featured-home.png';

export interface PropsCard extends React.HTMLProps<HTMLDivElement> {
    label: string
    img: string
    history: string
}

export const HighlightedCard = () => {

	return (
		<S.ContainerMain>
			<S.Container>
				<img src={FeatureImg} alt="Abmq" />
				<S.Content>
					<span>NAVEGUE PELO</span>
					<span>MUSEU VIRTUAL</span>
					<span>EM 360º</span>
					<div className="featured-list">
						<div className="featured-item">
							<img src={UserAstronaut} />
							<p>Compatível com<br /> óculos VR</p>
						</div>
						<div className="featured-item">
							<img src={Computer} />
							<p>Compatível com<br />  celular ou tablet</p>
						</div>
						<div className="featured-item">
							<img src={Mouse} />
							<p>Use o mouse e as<br />  setas para navegar<br />  com o computador</p>
						</div>
					</div>
				</S.Content>
			</S.Container>
			<S.Description>
				<h2>
					<span>HISTÓRIA</span>
					<span>&</span>
					<span>MEMÓRIA</span>
				</h2>
				<p><strong>Seja bem-vindo ao Museu Virtual Quarto de Milha</strong></p>
				<p> Tendo chegado ao  Brasil há quase seis décadas, o Quarto de Milha foi bem aceito e adaptou-se perfeitamente às peculiaridades do país. Bastante versátil, o cavalo logo destacou-se nos trabalhos do campo e nas pistas de competições, espalhando-se por todo o território nacional.</p>
			</S.Description>
		</S.ContainerMain>
	);
};