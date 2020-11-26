import styled from 'styled-components'

export const Wrapper = styled.section`

    min-height:100%;
    background: #EBF2F5;
    display:flex;

    
    display:flex;
    flex-direction:column;
     
    justify-content:center;
    align-items:center;


`
export const ConteinerAddress = styled.article`
    display:flex;
    justify-content:space-between;
    width:100%;
    gap:50px 10px;
    padding:100px 15%;    
    flex-wrap:wrap;

    h3 {
        color: #E2BB70;

    }
   p {
    color:#a59e93;
   }

   @media (max-width: 600px) {
    justify-content:center;

}

` 



export const SocialMedia = styled.div`
    display:flex;
 
    gap:5px;

 
    
   img {
       width:20px;
       cursor:pointer;
   }

   div {
    display:flex;
    gap: 5px;

   }
   
` 


export const WrapperInfos = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    color: #706E6B;

   
` 

export const WrapperMap = styled.div`
   background:#ccc;
   width:50%;
   min-width:300px;
   height:100%;

   img {
       width:100%;
       height:100%;

       transition: 0.5s all ease-in-out; 
       box-shadow: 2px 2px 10px #88888855;


       :hover {
        box-shadow: 3px 3px 15px #88888855;
       }
   }
` 

  
