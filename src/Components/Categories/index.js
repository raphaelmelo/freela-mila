import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


import { Wrapper, WrapperCategories, CartegoryItem, DescriptionStyled } from './style'


const Data = [
    {
        title: "Produtos de limpeza",
        description: "Trabalhamos com as melhores marcas, entregamos no seu endereço.",
        image: "/produtos-de-limpeza.svg",
        link: "/produtos/produtos-de-limpeza"
    },
    {
        title: "Descartáveis",
        description: "Copos, talheres, pratos,  acesse nossos produtos descartaveis.",
        image: "/produtos-descartaveis.svg",
        link: "/produtos/produtos-descartaveis"

    },
    {
        title: "Embalagens",
        description: "Embalagens para alimentos, caixas, bandejas e sacos.",
        image: "/embalagens.svg",
        link: "/produtos/embalagens"

    },
    {
        title: "Para festa",
        description: "Aqui você encontra os produtos essenciais para sua festinha.",
        image: "/produtos-para-festa.svg",
        link: "/produtos/produtos-para-festas"

    }
];

const Categories = Data.map((item) => (
    (
        <Link href={item.link}>
        <a>
        <CartegoryItem>
            <img src={item.image} alt={item.title} />
            <Typography variant="h6" gutterBottom>
                {item.title}
            </Typography>
            <DescriptionStyled variant="body1" gutterBottom>
                {item.description}
            </DescriptionStyled>
        </CartegoryItem>
        </a>
        </Link>
    )
))

export default function Category() {

    return (
        <Wrapper>
            <Container >
                <WrapperCategories>
                    {Categories}
                </WrapperCategories>
            </Container>
        </Wrapper>
    )
}
