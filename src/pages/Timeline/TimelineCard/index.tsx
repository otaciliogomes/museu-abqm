import React from 'react'

import * as S from './styles'
import Corda from '../../../assets/images/corda-removebg-preview.png'

type TimelineCardProps = {
    year: string
}

export const TimelineCard = ({ year }: TimelineCardProps) => {
    return (
        <S.Container>
            <img src={Corda} width="100" height="80" />
            <span>{year}</span>
        </S.Container>
    )
}