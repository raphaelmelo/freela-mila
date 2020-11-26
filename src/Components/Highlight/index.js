import React from 'react';
import Link from 'next/link'



import { Container } from '@material-ui/core';

import {
    Wrapper, WrapperItem, Item, WrapperButton, ItemImage,
    TitleStyled, TitleProductStyled, ButtonStyled
} from './style'

import { Highlight } from "../../produtcs"



const HighlightList = Highlight.map((item) => (
    (
        <Item key={item.title}>
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
                    {HighlightList}
                </WrapperItem>
                <WrapperButton>
                    <Link href="/produtos">
                        <ButtonStyled variant="contained" color="primary" disableElevation>
                            Todos os Produtos
                    </ButtonStyled>
                    </Link>
                </WrapperButton>
            </Container>
        </Wrapper>
    )
}
