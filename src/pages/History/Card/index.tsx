import React from 'react'
import * as S from './styles'

interface Props {
    label: string
    img: any
    onClick: () => void
}

export const Card = ({ label, img, onClick }: Props) => {
    console.log(Image)
    return (
        <S.Container onClick={() => onClick()}>
            <img
                src={img}
                alt={label}
            />
        </S.Container>
    )
}