import styled from 'styled-components'

export const Wrapper = styled.section`
    min-height:90vh;
    height:100%;
    background: #fff;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(90deg, #61fae6 0%, #1fb9c7 100%);

    padding: 30px 0;


`
export const WrapperFooter = styled.article`
    min-height:400px;
    display:flex;
    background: #EBF2F5;
    justify-content:space-evenly;
    align-items:center;
    padding: 30px 20px;


    

`

export const LogoFooter = styled.footer`

img {
        width: clamp(8rem,10vw,16.5rem); 

    }

    @media (max-width: 600px) {
    display:none;
    


}

`

export const WrapperFooterInfos = styled.article`
    display:flex;  
    flex-direction:column;
    justify-content:space-evenly;
    align-items:space-evenly;
    min-height:300px;
    color:#BC8E38;

    @media (max-width: 600px) {
    justify-content:center;
    align-items:center;



}


`

export const InfosFooter = styled.article`
    display:flex; 
    justify-content:space-between;
    font-weight:400;
    gap:5px; 
    align-items:center;

    

    @media (max-width: 600px) {
    padding:60px 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;
    article {
        width:100%;
        text-align:center;
    }

}



  
`

export const LinksFooter = styled.article`
    display:flex;
    flex-direction:column;

    


    span {
        font-weight:700;
    }
    li {
        list-style:none;
      }
      
  
`

export const ContactFooter = styled.article`

    span {
         font-weight:700;
    }

    li {
        list-style:none;
      }
  
`

export const AddressFooter = styled.article`
    width:30%;

    span {
        font-weight:700;
    }

    li {
        list-style:none;
      }

`

export const CardsFooter = styled.article`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
    height:100px;


    span {
        font-weight:700;
        text-transform:uppercase;
        font-size:14px;

    }
    img {
        padding:4px;
        height:45px;
 }

`

export const Credits = styled.article`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:#BC8E38;
    font-size:12px;
    text-transform:uppercase;
    
    span {
        background:#EFEFEF;
        padding: 0 5px;

    }
`
