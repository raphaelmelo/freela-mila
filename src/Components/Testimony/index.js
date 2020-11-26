import React from 'react';

import { Container } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";

import { Wrapper, WrapperCategories, CartegoryItem, CardStyled, CardHeaderStyled, CardContentStyled, TitleStyled, TypographyStyled } from './style'


const DataTestimony = [
    {
        title: "Suzana Santos",
        description: "Preço justo! Loja organizada com variedade de produtos, todos com qualidade e aquele atendimento top. Venham conferir. ",
    },
    {
        title: "David M. da Silva",
        description: "Ótimo preço comparado com grandes mercados, abasteço o estoque de descartáveis do meu restaurante com a Mila.",
    },
    {
        title: "Alexandra P. Anjos",
        description: "Aqui tem tudo que você precisa em descartáveis e produto de limpeza. Ótimo atendimento e com certeza super indico. Parabéns, Mila!",
    },
    {
        title: "Marcio C. Hickel ",
        description: "Loja com descartáveis para festas, embalagens, pratinhos, copos e talheres descartáveis, além do atendimento bom, os preços são justos.",
    }
];

const Categories = DataTestimony.map((item) => (
    (
        <CardStyled >
            <CardContent>
                <CardContentStyled>
                    <TypographyStyled>
                        <span>"</span>{item.description}<span>"</span>
                    </TypographyStyled>
                    <CardHeaderStyled title={`${item.title}`} />
                </CardContentStyled>
            </CardContent>
        </CardStyled>
    )
))

export default function Index() {

    return (
        <Wrapper>
            <Container >
                <TitleStyled variant="h5">
                    Depoimentos
                </TitleStyled>
                <WrapperCategories>
                    {Categories}
                </WrapperCategories>
            </Container>
        </Wrapper>
    )
}
