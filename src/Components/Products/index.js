import React from 'react';

import { Container } from '@material-ui/core';

import {
    Wrapper, WrapperItem, Item, ItemImage, WrapperButton,
    TitleStyled, TitleProductStyled, ButtonStyled
} from './style'


const Data = [
    {
        title: "Hamburgueira",
        image: "destaques/hamburgueira.svg"
    },
    {
        title: "Desinfetante",
        image: "/destaques/desinfetante.svg"
    },
    {
        title: "Produtos para festa",
        image: "/destaques/festa.svg"
    },
    {
        title: "Desengordurante",
        image: "/destaques/desengordurante.svg"
    },
    {
        title: "Balde",
        image: "/destaques/balde.svg"
    },
    {
        title: "Copos",
        image: "/destaques/copo.svg"
    }

];

const HighProducts = Data.map((item) => (
    (
        <Item>
            <div>
                <ItemImage src={item.image} alt={item.title} />
            </div>
            <TitleProductStyled variant="h6" gutterBottom>
                {item.title}
            </TitleProductStyled>
        </Item>
    )
))

export default function Index() {

    return (
        <Wrapper>
            <Container >
                <TitleStyled variant="h5">
                    Produtos em Destaque
            </TitleStyled>
                <WrapperItem>
                    {HighProducts}
                </WrapperItem>
                <WrapperButton>
                    <ButtonStyled variant="contained" color="primary" disableElevation>
                        Mais Produtos
                    </ButtonStyled>
                </WrapperButton>
            </Container>
        </Wrapper>
    )
}
