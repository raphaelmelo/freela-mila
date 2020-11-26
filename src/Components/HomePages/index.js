import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import { MainStyled } from './style'


export default function index(props) {

    return (
        <Container>
            <MainStyled>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {props.title}
                </Typography>
            </MainStyled>
        </Container>

    );
}
