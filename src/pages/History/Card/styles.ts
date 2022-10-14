import React from 'react'
import styled from 'styled-components'

export const Container = styled.button`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 352px;
    cursor: pointer;
    background-size: contain;
    padding-top: 50px;
    background-repeat: no-repeat;
    transition: 0.7s;
    
    &:hover {
        transform: scale(1.1);
    }

    > img {
        object-fit: contain;
        background-color: transparent;
        background-repeat: no-repeat;
        display: flex;

        width: 100%; 
        height: 100%;
        height: 100vh;
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