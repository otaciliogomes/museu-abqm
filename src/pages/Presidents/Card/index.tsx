import React from 'react'
import * as S from './styles'

export interface PropsCard {
    label: string
    img: string
}

export const Card = ({ label, img, ...rest }: PropsCard) => {
    const urlImage = 'https://adm.abqm.net.br:4431/app/webroot/img/content_files'

    return (
        <S.Content {...rest}>
            <img src={`${urlImage}/${img}`} />
            <div>
                <h4>{label}</h4>
            </div>
        </S.Content>

    )
}