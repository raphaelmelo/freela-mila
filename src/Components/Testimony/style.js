import styled from 'styled-components'


import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


export const Wrapper = styled.section`
    min-height:100vh;
    background: #EBF2F5;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 60px 0;



`
export const WrapperCategories = styled.article`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-evenly;
    gap:20px;
    

`
export const CartegoryItem = styled.article`
    padding:20px 0;
    width: 301px;
    height: 241px;

`



export const CardStyled = styled(Card)`
    width: 280px;
    height: auto;
    transition:1s;
    :hover{
        background:#ffffff78;
    }

`


export const CardHeaderStyled = styled(CardHeader)`
    span {
        color: #E3B358;
        font-weight: 400;
        font-size: 20px;
    }

   
`
export const CardContentStyled = styled(CardContent)`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:space-between;
    height: 400px;

`

export const TitleStyled = styled(Typography)`
    color: #353535;
    padding: 0 0 40px 0;
 `

export const TypographyStyled = styled(Typography)`
    font-size: 1.2rem !important;
    font-style: italic;
    font-weight: 300;
    line-height: 1.43;
    padding: 20px;
    text-align:start;
    color: #989696;

    span {
        font-weight: 800;
    }

`
