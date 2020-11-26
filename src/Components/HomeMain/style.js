import styled from 'styled-components'


export const MainStyled = styled.section`
    height:90vh;
    width:100%;
    font-weight: 400;
    color: #FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-image: url('/logo-sun.svg');
    background-repeat:no-repeat;
    background-position: 70% 25%;
    background-size: clamp(150px, 30%, 600px);
    
    @media (max-width: 600px) {
        background-image:none;
    }
         
`


export const TitleAndBackground = styled.div`
    height:60%;
    width:100%;    
    display:flex;
    align-items:center;
    padding: 0 0 0 3%;
    


    h1 {
        width: 35%;
        font-weight: 700;
        font-size: clamp(2.5rem, 4vw, 4.5rem); 
    }

    @media (max-width: 600px) {
        background-image:none;
        h1 {
        width: 100%; 
    }

}



`

export const Description = styled.div`
    height:100px;
    display:flex;
    align-items:center;
    
    
    h3 {
        font-size:20px;
    }

`