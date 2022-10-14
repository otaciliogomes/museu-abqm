import React, { useState } from 'react';
import Slider from 'react-slick';
import * as S from './styles';
import { HighlightedCard } from './HighlightedCard';
import { Modal } from './Modal';
import { TimelineCard } from './TimelineCard';

export type DataTimeLineType = {
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

type TimeLineProps = {
	dataTimeLine: DataTimeLineType[]
}

export const Timeline = ({ dataTimeLine }: TimeLineProps) => {
	const [openModal, setOpenModal]	 = useState(false)
	const [selectedGalleryData, setSelectedGalleryData] = useState<any[]>([])
	const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'

	const orderTimeLine = dataTimeLine.sort((a, b) => a?.title > b?.title ? 1 : -1)

	function handleOpenAndCloseModal () {
		setOpenModal(!openModal)
	}

	function handleSetSelectedGalleryData(data: any[]) {
		setSelectedGalleryData(data)
	}

	return (
		<S.Container>
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
				{orderTimeLine?.map((item, index, data) => (
					<S.Content>
						<HighlightedCard
							key={index}
							galleyData={item}
							title={item?.title}
							subtitle={item?.resume}
							img={`${urlImage}/${item?.content_files[0]?.file}?size=200`}
							history={item?.text}
							openModalGallery={handleOpenAndCloseModal}
							selectedGalleryData={handleSetSelectedGalleryData}
						/>
					</S.Content>
				))}
			</Slider>
			<S.WrapTimeLine>
				{orderTimeLine?.map((item, index) => (
					<TimelineCard year={item?.title} key={index} />
				))}
			</S.WrapTimeLine>
			<Modal
				data={selectedGalleryData}
				isOpen={openModal}
                onClose={handleOpenAndCloseModal}
			/>
		</S.Container>
	);
};