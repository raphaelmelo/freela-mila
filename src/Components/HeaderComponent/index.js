import React from 'react';

import NavMobile from '../NavMobile'
import Link from 'next/link'

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import { Wrapper, HeaderMenu, NavbarMenu, NavDesktop, LogoHeader } from './style'

 


export default function Header() {
   
    return (
        <Container>

            <Wrapper>
                <HeaderMenu>
                    <LogoHeader>
                    <Link href="/">
                        <img src="/logomarca.png" alt="Logomarca Mila Descartaveis" />
                    </Link>

                    </LogoHeader>

                    <NavbarMenu>
                        <NavDesktop>
                            <Link href="/">
                                <Button aria-controls="simple-menu" aria-haspopup="true">
                                    Home
                                </Button>
                            </Link>

                            <Link href="/produtos">
                                <Button aria-controls="simple-menu" aria-haspopup="true">
                                    Produtos
                                </Button>
                            </Link>

                            <Link href="/sobre">
                                <Button aria-controls="simple-menu" aria-haspopup="true">
                                    Sobre Nós
                                </Button>
                            </Link>


                            <Link href="/contato">
                                <Button aria-controls="simple-menu" aria-haspopup="true">
                                    Contato
                                </Button>
                            </Link>
                       
                        </NavDesktop>

                        <NavMobile />

                    </NavbarMenu>

                </HeaderMenu>

            </Wrapper>

        </Container>



    )
}
