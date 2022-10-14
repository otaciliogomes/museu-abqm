import React, { useState } from 'react';
import { Card } from './Card';
import { Modal } from './Modal';
import Slider from 'react-slick';
import * as S from './styles';
import { v4 } from 'uuid';

export type PresidentType = {
	id: number,
	language: string,
	date: string,
	title: string,
	url: string,
	resume: string
	text: string,
	link_externo: string,
	link_em_nova_aba: string,
	keywords: string,
	status: number,
	star: number,
	start_date: string,
	finish_date: string,
	featured: number,
	index_id: number,
	content_files: any[]
}

type PresidentProps = {
	presidentList: PresidentType[]
}


export const Presidents = ({ presidentList }: PresidentProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [infoModal, setInfoModal] = useState({} as PresidentType);

	function handleOpenModalInfo(president: PresidentType) {
		setOpenModal(true);
		setInfoModal(president);
	}
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		vertical: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					vertical: false,
				}
			},
		]
	};

	function handleCloseModal() {
		setOpenModal(false);
	}

	return (
		<S.Container>
			<Slider
				className='slidePresident'
				arrows
				{...settings}
			>
				{presidentList.map((item, index) => (
					<Card
						key={v4()}
						label={item.title}
						img={item.content_files[0]?.file} //@ts-ignore
						onClick={() => handleOpenModalInfo(item)}
					/>
				))}

			</Slider>
			<Modal
				isOpen={openModal}
				onClose={handleCloseModal}
				name={infoModal.title}
				image={infoModal.link_externo}
			/>
		</S.Container>
	);
};