/* eslint-disable indent */
import React, { useState } from 'react';
import Slider from 'react-slick';
import * as S from './styles';
import { Card } from './Card';
import { v4 } from 'uuid'
import { HighlightedCard } from './HighlightedCard';
import { dataTopo } from '../../mock/mock-topo';
import { Modal } from './Modal';
import { ResponseItems } from '../../interface';

export interface President {
	image: string
	name: string
	id: number
}

interface CategoriesProps {
	dataCategories: ResponseItems[]
}

export const Categories = ({ dataCategories }: CategoriesProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [dataModal, setDataModal]= useState([])

	function handleOpenModal(data:any) {
		setOpenModal(true);
		setDataModal(data)
		console.log(data)
	}

	function setCloseModal() {
		setOpenModal(false);
	}

	return (
		<S.Container>
			<S.Content>
				<HighlightedCard
				//@ts-ignore
					label={dataTopo[0].name}
					img={dataTopo[0].image}
					history={dataTopo[0].image}
				/>
			</S.Content>
			<h3>Galerias</h3>
			<Slider
				className='slideMoodSport'
				slidesToScroll={1}
				slidesToShow={1}
				speed={500}
				dots={false}
				vertical={false}
				touchMove={false}
				arrows
				infinite
			>
				{dataCategories?.map((item, index) => (
					<Card
						key={v4()}
						onClick={handleOpenModal}
						firstItemCard={item.content_files}
					/>
				))}
			</Slider>
			{openModal && (
				<Modal
					data={dataModal}
					isOpen={openModal}
					onClose={setCloseModal}
				/>
			)}
		</S.Container>
	);
};