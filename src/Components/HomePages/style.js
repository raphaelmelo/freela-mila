import styled from 'styled-components'


export const MainStyled = styled.section`
    height:50vh;
    width:100%;
    font-weight: 400;
    color: #FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;

    
    h1 {
        width: 65%;
        font-weight: 700;
        font-size: clamp(2.5rem, 4.2vw, 8.5rem); 
    }

    @media (max-width: 600px) {
        background-image:none;
        h1 {
        width: 100%; 
    }

`
