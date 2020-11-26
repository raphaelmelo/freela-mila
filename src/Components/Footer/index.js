import React from 'react';
import Link from 'next/link'

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { Wrapper, WrapperFooter, LogoFooter, WrapperFooterInfos, InfosFooter, LinksFooter, AddressFooter, ContactFooter, CardsFooter, Credits } from './style'




export default function Providers() {

    return (
        <Wrapper>
            <Container >
                <WrapperFooter>
                    <LogoFooter>
                        <img src="/logomarca.png" alt="Mila descartaveis" />
                    </LogoFooter>

                    <WrapperFooterInfos>
                        <InfosFooter>
                            <LinksFooter>
                                <span>NAVEGUE</span>

                                <li>
                                <Link href="/">
                                <a>HOME</a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/produtos">
                                <a>PRODUTOS</a>
                                </Link>
                                </li>      <li>
                                <Link href="/sobre">
                                <a>SOBRE</a>
                                </Link>
                                </li>      <li>
                                <Link href="/contato">
                                <a>CONTATO</a>
                                </Link>
                                </li>
                               
                            </LinksFooter>

                            <ContactFooter>
                                <Typography variant="subtitle1" component="p" gutterBottom>
                                    <span>TELEFONES</span> <br />
                                    <Link href="https://api.whatsapp.com/send?phone=5513996590382&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido">
                                    <a target="_blank">(13) 99659-0382</a>
                                    </Link>
                                    <br/>
                                    <Link href="https://api.whatsapp.com/send?phone=5513996651314&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido">
                                    <a target="_blank"> (13) 99665-1314</a>
                                    </Link>
                                </Typography>
                            </ContactFooter>

                            <AddressFooter>

                                <Typography variant="body1" component="p" gutterBottom>
                                    <span>ENDEREÇO</span>

                                    <br />
                                     R. Hermenegildo Azevedo, 372 - loja 03 - Parque Enseada, Guarujá - SP
                                    </Typography>
                            </AddressFooter>
                        </InfosFooter>
                        <CardsFooter>
                             <img src="/cartoes.svg" alt="cartões de credito aceitos" />
                        </CardsFooter>
                        <Credits>
                            <span>Desenvolvido por Raphael Melo</span>
                        </Credits>
                    </WrapperFooterInfos>
                </WrapperFooter>
            </Container>
        </Wrapper>
    )
}
