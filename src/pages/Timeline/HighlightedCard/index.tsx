import React from 'react'
import * as S from './styles'
import { Camera } from '@styled-icons/bootstrap/Camera'

export interface PropsCard extends React.HTMLProps<HTMLDivElement> {
    title: string
    subtitle: string
    img: string
    history: string
    openModalGallery: () => void
    selectedGalleryData: (data: any[]) => void
    galleyData: any
}

interface GalleyDataProps {

}

export const HighlightedCard = ({ 
    title, 
    subtitle, 
    img, 
    history, 
    openModalGallery,
    selectedGalleryData,
    ...rest 
}: PropsCard) => {
    function handleOpenModalGallery() {
        const data = []
        openModalGallery()
        selectedGalleryData(rest.galleyData.content_files)
    }
        return (
        <S.Container>
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
            </S.Content>
            <S.WrapperMain>
                <S.WrapperImage>
                    <img src={img} alt={title} />
                </S.WrapperImage>
                <S.WrapperBtn>
                    <S.TextButton>
                        Veja outras fotos desse<br /> evento em Galeria
                    </S.TextButton>
                    <button type="button" onClick={() => handleOpenModalGallery()}>
                        <S.IconButton />
                    </button>
                </S.WrapperBtn>
            </S.WrapperMain>
            <S.WrapperText>
                <div dangerouslySetInnerHTML={{__html: history.replaceAll("p1", "")}} />
            </S.WrapperText>
        </S.Container>

    )
}