import React from 'react';
import { Container } from '@material-ui/core';

import { Wrapper, WrapperProviders, ProviderItem } from './style'



const Data = [
    {
        title: "Meiwa Embalagens",
        image: "parceiros/meiwa.svg"
    },
    {
        title: "Copobras",
        image: "parceiros/copobras.svg"
    },
    {
        title: "Total Quimica",
        image: "parceiros/totalquimica.svg"
    },
    {
        title: "Cristalcopo",
        image: "parceiros/cristalcopo.svg"
    }
];

const Categories = Data.map((item) => (
    (
        <ProviderItem>
            <img src={item.image} alt={item.title} />
        </ProviderItem>
    )
))

export default function Providers() {

    return (
        <Wrapper>
            <Container >
                <WrapperProviders>
                    {Categories}
                </WrapperProviders>
            </Container>
        </Wrapper>
    )
}
