import React from 'react';
import Link from 'next/link'

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { MainStyled, WrapperCategories, CategorieItem } from './style'


const Data = [
    {
        title: "Limpeza",
        image: "/produtos-de-limpeza.svg",
        link: "/produtos/produtos-de-limpeza"
    },
    {
        title: "Descartáveis",
        image: "/produtos-descartaveis.svg",
        link: "/produtos/produtos-descartaveis"

    },
    {
        title: "Embalagens",
        image: "/embalagens.svg",
        link: "/produtos/embalagens"

    },
    {
        title: "Para festa",
        image: "/produtos-para-festa.svg",
        link: "/produtos/produtos-para-festas"

    }
];

const ContentCategories = Data.map((item) => {
    return (
        <CategorieItem>
        <Link href={item.link}>
            <Button variant="contained" endIcon={<img src={item.image}/>}>
                <Typography variant="h2" component="h3">{item.title}</Typography>
            </Button>
        </Link>
         </CategorieItem>
    )
})


export default function index() {

    return (
        <Container>
            <MainStyled>
                <WrapperCategories>
                   {ContentCategories}
                </WrapperCategories>
            </MainStyled>
        </Container>

    );
}
