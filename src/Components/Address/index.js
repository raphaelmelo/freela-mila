import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import { Wrapper, ConteinerAddress, WrapperInfos, WrapperMap, SocialMedia } from './style'




export default function Providers() {

    return (
        <Wrapper>
            <Container >
                <ConteinerAddress>
                    <WrapperInfos>
                        <div>
                            <Typography variant="h5" component="h3">
                                E-mail
                                </Typography>
                            <Typography variant="body1" component="p">
                                mila.descartaveis@gmail.com
                                </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Redes Sociais
                                </Typography>
                            <SocialMedia>

                                <Link href="https://www.facebook.com/miladescartaveis/">
                                    <div>
                                        <Typography variant="body1" component="p">
                                            Facebook
                                            </Typography>
                                        <img src="/facebook.svg" alt="Nossa página no Facebook" />
                                    </div>
                                </Link>
                                <br />
                                <Link href="https://www.instagram.com/miladescartaveis/">
                                    <div>
                                        <Typography variant="body1" component="p">
                                            Instagram
                                            </Typography>
                                        <img src="/instagram.svg" alt="Nosso perfil no Instagram" />
                                    </div>
                                </Link>


                            </SocialMedia>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Telefone & WhatsApp
                                </Typography>
                            <Typography variant="body1" component="p">
                                (13) 99665-1314 <br /> (13) 99659-0382
                                </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Nosso Expediente
                                </Typography>
                            <Typography variant="body1" component="p">
                                segunda-feira 08h–18h <br />
                                terça-feira	08h–18h <br />
                                quarta-feira 08h–18h <br />
                                quinta-feira 08h–18h <br />
                                sexta-feira	08h–18h <br />
                                sábado 08h–18h
                                </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Nosso Endereço
                                </Typography>
                            <Typography variant="body1" component="p">
                                Rua Hermenegildo de Azevedo, 372 <br /> Loja 03 - Parque Enseada <br /> Guarujá - SP,  CEP 11443-240
                                </Typography>
                        </div>
                    </WrapperInfos>
                    <WrapperMap>
                        <a href="https://www.google.com/maps/place/MILA+DESCART%C3%81VEIS/@-23.9788387,-46.2069026,18z/data=!4m5!3m4!1s0x0:0x182a008a0fea07ec!8m2!3d-23.9787627!4d-46.2062696" target="_blank" >
                            <img src="/map.webp" alt="Mapa com nosso endereço" />
                        </a>
                    </WrapperMap>
                </ConteinerAddress>
            </Container>
        </Wrapper>
    )
}
