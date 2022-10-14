import React from 'react'
import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 352px;
    width: 350px;
    padding-top: 50px;

    cursor: pointer;
    transition: 0.7s;
    border: none;

    background-size: contain;
    background-repeat: no-repeat;
    background-color: #000000;

    &:hover {
        transform: scale(1.1);
    }

    > img {
        object-fit: contain;
        background-color: transparent;
        background-repeat: no-repeat;
        display: flex;

        width: 100%; 
        height: 270px;
        max-height: 270px;
    }
    @media (min-width: 0px) and (max-width: 1024px){
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }
`

export const Label = styled.h4`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 22px;
    text-decoration: underline;

    width: 100%;
    margin-top: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`