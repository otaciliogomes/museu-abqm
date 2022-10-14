import React from 'react';
import ModalContainer from 'react-modal';
import Slider from 'react-slick';
import * as S from './styles'; //@ts-ignore
import stylesCss from './index.module.css';

interface Card {
    id: number
    name: string
    image: string
    description: string
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    data: any[]
}

export const Modal = ({ isOpen, onClose, data }: ModalProps) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: false
	};
	const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'


	return (
		<ModalContainer
			isOpen={isOpen}
			onRequestClose={onClose}
			className={stylesCss.modal}
			overlayClassName={stylesCss.modalOverlay}
		>
			<S.Container>
				{/* <S.Content> */}
				<S.ContentInfo style={{position: 'relative'}}>
					<S.CloseModal onClick={onClose}>X</S.CloseModal>
					<Slider
						className='slideGallery'
						{...settings}
						
					>
						{data?.map(item => (
							<img
								key={item?.id}
								src={`${urlImage}/${item.file}`}
								width="500" 
								height="500"
								style={{
									objectFit: 'cover',
								}}
							/>
						))}
					</Slider>
				</S.ContentInfo>
				{/* </S.Content> */}
			</S.Container>
		</ModalContainer>
	);
};