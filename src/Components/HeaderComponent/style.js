
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import styled from 'styled-components'

export const Wrapper = styled.div`
    width:100%;
    height:150px;
    
    display:flex;
    flex-direction:column;
    justify-content:center;


`

export const HeaderMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
 
    img {
        height:90px;
    }


`
export const LogoHeader = styled.article`
    img {
        cursor:pointer;
    }

`


export const NavbarMenu = styled.nav`
    
     
   
    span {
        color:#fff;
        font-family: Jost;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
    }
 


`

export const NavDesktop = styled.div`
    display:flex;

@media (max-width: 600px) {
    display:none;

}

`

export const NavMobile = styled.div`
    display:none;
    

@media (max-width: 600px) {
    display:flex;

}

`


export const ButtonMenu = styled(Button)`
    font-size:35px;
    color:#c1c1c1;
`

export const ListMenuStyled = styled(List)`
    background:#cc22cc15;

    height:100vh;
    width:100%;
`





