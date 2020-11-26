import styled from 'styled-components'


export const MainStyled = styled.section`
    height:auto;
    padding:0 0 100px 0;
    font-weight: 400;
    color: #FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;

`

export const WrapperCategories = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px 0;

`

export const CategorieItem = styled.article`
    display:flex;
    height:180px;
    width:100%;
    min-width:60%;
    align-items:center;
    border-radius:5px;
    cursor: pointer;
 
    button {
        background-color: rgb(243, 147, 63);

        width:100%;
        height:100%;
        display:flex;
        justify-content:space-around;
        
    :hover{
            background-color:#f7a955;
        }

    }


    h3 {
        text-transform:uppercase;
        font-weight:700;
        font-size: clamp(1.4rem, 5.2vw, 6.5rem); 
        color:#fff;
    }

    img {
        height:100px;
    }


`



