import styled from 'styled-components'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export const Wrapper = styled.section`
    min-height:100vh;
    background: #fff;
    display:flex;
    padding: 20px 0;
`
export const WrapperItem = styled.article`
    padding: 20px 0;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    gap:20px;
    

`
export const Item = styled.article`
    padding:20px 0;
    width: 301px;
    height: 241px;

    div {
        overflow: hidden; 
        margin: 0 auto; 
        height: 175px;
    }

`
export const ItemImage = styled.img`
    width: 335px;
    height: 175px;
    transition: 0.5s all ease-in-out; 
    background: linear-gradient(329.54deg, #9D6B0C 0%, #FFDC9A 85.35%);
    padding: 10px 0;

    :hover{
        transform: scale(1.15555); 
        width: 335px;
        height: 175px;
        transition: 0.5s all ease-in-out; 
        background: linear-gradient(329.54deg, #9D6B0C 0%, #FFDC9A 99.35%);
        background-color: #ef5734;
    }
    
`

export const WrapperButton = styled.div`
    padding:80px 0;
    display:flex;
    justify-content:center;

`

export const TitleStyled = styled(Typography)`
    color: #353535;
    padding: 40px 0 15px 0;

 `
export const TitleProductStyled = styled(Typography)`
    text-align:center;
    padding: 10px 0;
    color: #989696;
    background: #EBF2F5;
`

export const ButtonStyled = styled(Button)`
    color: #fff;
    text-align:center;
    font-size:14px !important;
    background-color: #c37f00d4 !important;
`

