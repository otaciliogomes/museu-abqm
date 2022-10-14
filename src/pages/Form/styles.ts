import styled from 'styled-components';
import { ErrorWarning } from 'styled-icons/remix-fill';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 50px;
`;

export const ContentInput = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 20px;

    > select {
        border-radius: 10px;
        height: 35px;
        width: 200px;
    }

    textarea {
        border-radius: 10px;
    }

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        
        width: 100%;

        margin-top: 10px;
    }
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 10px;
`;

export const Label = styled.label<{
    marginRight?: number,
    maxWidth?: number
}>`
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : 100}px;
    color: #FFF;
    width: 100%;
    font-family: 'SFCompactDisplay';
    font-size: 18px;
    font-weight: 300;

    @media (min-width: 0px) and (max-width: 1024px){
        margin-bottom: 8px;
    }
`;

export const ContentState = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        
        width: 100%;

        margin-top: 10px;
    }
`;

export const ContentSelect = styled.div<{
    marginRight?: number,
}>`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 35px;
    width: 100%;

    margin-right: ${({ marginRight }) => marginRight}px;

    > select {
        border-radius: 10px;
        height: 35px;
        width: 400px;

        @media (min-width: 0px) and (max-width: 1024px){    
            width: 100%;
        }
    }

    @media (min-width: 0px) and (max-width: 1024px){ 
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        width: 100%; 
        height: 80px;

        margin-top: 12px;
        margin-right: ${({ marginRight }) => marginRight}px;
    }
`;

export const ContainerButton = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
    align-self: flex-end;

    width: 93%;
    @media (min-width: 0px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;
        height: 80px;
    }
`;

export const ContentRadio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    >input {
        background-color: transparent;
        @media (min-width: 0px) and (max-width: 1024px){
            width: 30px;
            height: 30px;
            margin-right: 4px;
        }
    }
`;

export const ContainerRadio = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 40%;
    margin-bottom: 20px;

    @media (min-width: 0px) and (max-width: 1024px){
        width: 100%;
        margin-bottom: 0px;

        justify-content: space-between;
        align-items: center;
    }
`;

export const IconWarning = styled(ErrorWarning).attrs({
	color: 'red',
	size: 24
})`
    margin-left: 10px;
`;