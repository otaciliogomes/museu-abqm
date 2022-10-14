import React from 'react'
import * as S from './styles'

interface Props {
    label: string
    img: string
    onClick: () => void
}

export const Card = ({ label, img, onClick }: Props) => {

    return (
        <S.Container onClick={() => onClick()}>
            <img
                src={img}
                alt={label}
            />
        </S.Container>
    )
}