import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    background-color: #000;

    padding: 10px;
    
    max-width: 800px;
    max-height: 600px;


    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        max-height: 600px;
        > span {
             color: #fff;
        }

        .slidePresident {
            width: 50%;
            max-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 7%;

            >img {
                width: 400px;
                height: 400px;
                object-fit: cover;
            }
        }
    }

    .carouselDown{
        width: 90%;
        max-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;

        >img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            cursor: pointer;
        }
    }
`;

export const Content = styled.div``;