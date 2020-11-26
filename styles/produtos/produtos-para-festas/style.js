import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';


export const Wrapper = styled.main`
    background: #fff;
    display:flex;
    flex-direction:column; 
    padding: 30px 5% 80px ; 


    h1 {       
        font-size: clamp(2.5rem, 5.2vw, 8.5rem); 

    }


 
`


export const WrapperItem = styled.article` 
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:start;
    gap:20px; 
    padding-bottom:50px; 


    @media (max-width: 600px) {       
        width: 100%; 
        display:flex;
        flex-direction:row;
        justify-content: start;
    }
    
 
`

export const Item = styled.article`
    padding:20px 0;
    width: 20%;
    min-width:300px;
    height: 241px; 

    div {
        overflow: hidden; 
        margin: 0 auto; 
        height: 175px;         
        display:flex;
        align-items:center;
        justify-content: start;
    }


`


export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.5s all ease-in-out; 
    background: linear-gradient(329.54deg, #9D6B0C 0%, #FFDC9A 85.35%);


    :hover{
        transform: scale(1); 
        width: 105%;
        height: 105%;
        transition: 0.5s all ease-in-out; 
        background: linear-gradient(329.54deg, #9D6B0C 0%, #FFDC9A 99.35%);
        background-color: #ef5734;
    }
    
`


export const TitleStyled = styled(Typography)`
    color: #ccc;
    padding: 40px 0 25px 0; 

 `
export const TitleProductStyled = styled(Typography)`
    text-align:center;
    padding: 10px 0;
    color: #989696;
    background: #EBF2F5;
 
`

export const LinksNavigation = styled.article`
        height: 200px;

    display:flex;
    justify-content:space-between;
    align-items:center;


    p {
        color: #b4b4b4;
        cursor:pointer;
        font-size: clamp(.8rem, 1vw, 1.5rem); 

    }
`

