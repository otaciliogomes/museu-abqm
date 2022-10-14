import React, { useState } from 'react';
import ModalContainer from 'react-modal';
import * as S from './styles';
import { Carousel } from '../Carousel';	//@ts-ignore
import Img from '../../../assets/images/img-marcacao-acervo.jpg';	//@ts-ignore
import ChevronRight from '../../../assets/images/chevron-right.svg';

export interface ModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
    category: any
}

export const Modal = ({
	title,
	isOpen,
	onClose,
	category
}: ModalProps) => {
	const [itensCategory, setItensCategory] = useState<any[]>(category?.items[0]?.items);
	const [selectedCategory, setSelectedCategory] = useState(category?.items[0]?.title);
	const [selectedItem, setSelectedItem] = useState(0);

	function handleItensCategory(categories: any) {
		setItensCategory(categories?.items);
		setSelectedCategory(categories?.title);
		setSelectedItem(0);
	}

	return (
		<ModalContainer
			isOpen={isOpen}
			onRequestClose={onClose}
			style={{
				overlay: {
					background: 'rgba(0, 0, 0, .9)'
				},
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					padding: '20px 40px',
					transform: 'translate(-50%, -50%)',
					width: '60%',
					borderRadius: '10px',
					background: 'transparent',
					border: 'none'
				}
			}}
		>
			<S.CloseModal onClick={onClose}>X</S.CloseModal>
			<S.Container>
				<S.Content>
					<S.LabelContent className="column-1">
						<S.Title>{title}</S.Title>
						{	//@ts-ignore
							category?.items?.map((item, index) => (
								<S.Label
									key={index}
									onClick={() => handleItensCategory(item)}
									active={selectedCategory === item?.title}
									className="column-1__item"
								>
									{item?.title}
									<img src={ChevronRight} alt="" />
								</S.Label>
							))
						}
					</S.LabelContent>
					<S.LabelContent className="column-2">
						{
							itensCategory?.map((item, index) => (
								<S.Label
									key={index}
									onClick={() => setSelectedItem(index)}
									active={selectedItem === index}
									className="column-2__item"
								>
									{item?.title}
								</S.Label>
							))
						}
					</S.LabelContent>
					<S.LabelContent className="column-3">
						{!!itensCategory[selectedItem]?.title && (
							<S.Title className='title-column-3'>
								{itensCategory[selectedItem]?.title || ''}
							</S.Title>
						)}
						<S.Label active className='text-column-3'>
							{itensCategory[selectedItem]?.text}
						</S.Label>

						<img style={{ marginBottom: 15, width: '100%' }} src={Img} />
						{/* <Carousel
							title={itensCategory[selectedItem]?.title}
							data={itensCategory[selectedItem]?.image}
						/> */}
						<S.Label active className='text-column-3'>
							{itensCategory[selectedItem]?.text}
						</S.Label>

						<S.Label active className='text-column-3'>
							{itensCategory[selectedItem]?.text}
						</S.Label>
					</S.LabelContent>
				</S.Content>
			</S.Container>
		</ModalContainer>
	);
};