import { useRef, useState } from 'react'
import Slider from 'react-slick';
import * as S from './styles'

interface ImageProps {
	image: string;
	name: string;
}

interface SlideProps {
	data: ImageProps[]
	title: string
}

export const Carousel = ({ data, title }: SlideProps) => {
	const slideRef = useRef<any>()
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: false
	};

	const settings2 = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		vertical: false
	};

	return (
		<S.Container>
			<div>
				<span>{title}</span>
				<Slider
					ref={slideRef}
					className='slidePresident'
					arrows
					{...settings}
				>
					{
						data.map((item, index) => (
							<img
								key={index}
								src={item?.image}
								alt={item?.name}
							/>
						))
					}
				</Slider>
				<Slider
					className='carouselDown'
					arrows
					{...settings2}
				>
					{
						data.map((item, index) => (
							<img
								onClick={() => slideRef.current.slickGoTo(index)}
								key={index}
								src={item?.image}
								alt={item?.name}
							/>
						))
					}
				</Slider>
			</div>


		</S.Container>
	)
}