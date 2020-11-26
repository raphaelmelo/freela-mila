import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.section`
    min-height:70vh;
    
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
    width: 250px;
    height: 241px;
   

    color:#353535;

`


export const DescriptionStyled = styled(Typography)`
    color: #E3B358;
`
