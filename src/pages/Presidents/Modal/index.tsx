import React from 'react';
import ModalContainer from 'react-modal';
import { THEME } from '../../../global';
import { Card } from '../Card';
import * as S from './styles'; //@ts-ignore
import stylesCss from './index.module.css';

export interface ModalProps {
    image: string
    name: string
    isOpen: boolean
    onClose: () => void
}

export const Modal = ({ name, image, isOpen, onClose }: ModalProps) => {
	return (
		<ModalContainer
			isOpen={isOpen}
			onRequestClose={onClose}
			className={stylesCss.modal}
			overlayClassName={stylesCss.modalOverlay}
		>
			<S.Container style={{position: 'relative'}}>
				<S.Content>
					<S.ContentInfo>
                        <S.CloseModal onClick={onClose}>X</S.CloseModal>
						<S.ModalImage>
							<img src={image} alt="" />
						</S.ModalImage>
						<S.PresidentHistory>
							<S.Title>{name}</S.Title>
							<S.TitleYear>1977 - 1979</S.TitleYear>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						</S.PresidentHistory>
						<S.PresidentGroups>
							<S.Title>Chapa eleita</S.Title>
							<ul>
								<li>Antonio Galvão dos Santos Junior</li>
								<li>Conselho Administração</li>
								<li>Camila Menezes</li>
								<li>Conselho Administração</li>
								<li>Francisco Emilio Costa de Moura</li>
								<li>Conselho Administração</li>
								<li>Ismael Gonçalves da Silva</li>
								<li>Conselho Administração</li>
								<li>Jerônimo Luiz Muzetti</li>
								<li>Conselho Administração</li>
								<li>Luis Augusto de Camargo Ópice</li>
								<li>Conselho Administração</li>
								<li>Nilson Genovesi</li>
								<li>Conselho Administração</li>
								<li>Paulo Gustavo A. Lima de Moura</li>
								<li>Conselho Administração</li>
								<li>Ricardo Amadeu Sassi</li>
								<li>Conselho Administração</li>
								<li>Gabriel Khoury</li>
								<li>Conselho Administração</li>
								<li>Sergio Serra Thomé Filho</li>
								<li>Conselho Administração</li>
								<li>Flávia Dias Cajé</li>
							</ul>
						</S.PresidentGroups>
					</S.ContentInfo>
				</S.Content>
			</S.Container>
		</ModalContainer>
	);
};