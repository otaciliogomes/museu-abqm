import React from 'react'

import * as S from './styles'

interface CardProps {
    label: string
}

export const Card = ({ label }: CardProps) => {
    return (
        <S.Container>
            <div>

            </div>
            <span>{label}</span>
        </S.Container>

    )
}