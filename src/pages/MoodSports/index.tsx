/* eslint-disable react/jsx-key */
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import * as S from './styles';
import { Card } from './Card';
import { HighlightedCard } from './HighlightedCard';
import { ResponseItems } from '../../interface';

type MoodSportProps = {
	data: ResponseItems[]
}

export const MoodSports = ({ data } : MoodSportProps) => {
	const refSlide = useRef<any>()
	const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'

	return (
		<S.Container>
			<Slider
				ref={refSlide}
				className='slideMoodSport'
				slidesToScroll={1}
				slidesToShow={1}
				speed={500}
				dots={true}
				vertical={false}
				touchMove={false}
				arrows
				infinite
			>
				{data?.map((item, index) => (
					// eslint-disable-next-line react/jsx-key
					<S.Content>
						<HighlightedCard
							key={index}
							label={item?.title}
							img={`${urlImage}/${item?.content_files[0]?.file}`}
							history={item?.text}
						/>
					</S.Content>
				))}
			</Slider>
			<S.ContainerCards className='hiddenScrollbar'>
				{data.map((item, index) => (
					<Card
						key={index}
						label={item?.title}
						image={`${urlImage}/${item?.content_files[1]?.file}`}
						onClick={() => refSlide?.current?.slickGoTo(index)}
					/>
				))}
			</S.ContainerCards>
		</S.Container>
	);
};