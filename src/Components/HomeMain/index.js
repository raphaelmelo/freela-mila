import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import { MainStyled, TitleAndBackground, Description } from './style'




export default function index() {

    return (
        <Container>
            <MainStyled>
                <TitleAndBackground>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Produtos de limpeza, descartáveis, embalagens e para festa.
                </Typography>
                </TitleAndBackground>
                <Description>
                    <Typography variant="subtitle1" component="h3" gutterBottom>
                        Fazemos entregas em toda cidade de Guarujá.
                    </Typography>
                </Description>
            </MainStyled>
        </Container>

    );
}
