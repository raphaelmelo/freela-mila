import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.section`
    min-height:50vh;
    background: #fff;
    display:flex;
    justify-content:center;
    align-items:center;

    padding: 60px 0;


`
export const WrapperProviders = styled.article`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    gap:10px;
    

`
export const ProviderItem = styled.article`
    min-width:200px;
    min-height:150px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    img {
        width: 110px;
    }

`

