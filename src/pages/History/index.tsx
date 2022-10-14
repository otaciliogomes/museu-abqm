import { useState } from 'react'
import { Card } from './Card'
import { Modal } from './Modal'
import Slider from 'react-slick';
import { v4 } from 'uuid'

import * as S from './styles'
import { mock } from './mock'
import { ResponseItems } from '../../interface';

type HistoryProps = {
    dataHistory: ResponseItems[]
}


export const History = ({ dataHistory }: HistoryProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [infoModal, setInfoModal] = useState({} as any)

    function handleOpenModalInfo(item: any) {
        setOpenModal(true)
        setInfoModal({
            title: item.title,
            item
        })
    }
console.log(dataHistory)
    function handleCloseModal() {
        setOpenModal(false)
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

    return (
        <S.Container>
            <Slider
                className='slideHistory'
                arrows
                {...settings}
            >
                {mock.map((item) => (
                        <Card
                            key={v4()}
                            label={item.title}
                            img={item.image}
                            onClick={() => handleOpenModalInfo(item)}
                        />
                ))}
            </Slider>
            {openModal && (
                <Modal
                    isOpen={openModal}
                    category={infoModal.item}
                    onClose={handleCloseModal}
                    title={infoModal.title}
                />
            )}

        </S.Container>
    )
}