import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { Wrapper, WrapperAbout } from './style'

 
 
 

export default function About() {

    return (
        <Wrapper>
            <Container >
                <WrapperAbout>
                        <Typography variant="h4" component="h2" >
                        Nossa História
                        </Typography>
                        <Typography variant="body1">
                        Essa jornada é tomada por 4 princípios que
                        guiam o dia-a-dia da Mila como empreendedora
                        são eles: coragem, persistência, foco e fé.
                        Assim nasceu a Mila Descartáveis com coragem 
                        para começar uma loja do zero, sem nenhuma prateleira, 
                        mas com persistência para não parar em meio a tantas dificuldades 
                        e foco no objetivo de crescer sem perder a direção e por fim, 
                        a fé para crer e vencer cada dia.
                        <br/>
                        <br/>
                        “Era dezembro de 2013 com pouca mercadoria, uma lista de produtos
                        em uma pasta e uma bicicleta. Assim dei início a realização desse 
                        projeto, indo de porta em porta. Vendendo embalagens, descartáveis
                        e produtos de limpeza nos comércios e residências.
                        Com o tempo, fidelizei clientes que são parceiros e estão conosco 
                        até os dias atuais. Alcançamos nosso espaço no mercado local e hoje
                        atendemos clientes por toda a cidade do Guarujá. - Mila.”
                        </Typography>
                 
                        <Typography variant="h5" component="h3">
                        Missão
                        </Typography>
                        <Typography variant="body1">
                        Ser uma empresa focada na melhor experiência do cliente,
                        tratando a todos com respeito, amor e atenção, buscando atender
                        as necessidades com produtos de qualidade, preço  justo e excelência no atendimento.
                        </Typography>

                        <Typography variant="h5" component="h3" >
                        Visão
                        </Typography>
                        <Typography variant="body1">
                        Crescer de forma orgânica atendendo com uma nova filial outros 
                        bairros da cidade.
                        </Typography>

                        <Typography variant="h5" component="h3">
                        Valores
                        </Typography>
                      

                        <Typography variant="body1">
                        Desempenhar nossas atividades com base nos seguintes princípios: 
                        honestidade, simplicidade, confiança e gratidão com todos os nossos
                        clientes, fornecedores e parceiros. Buscando também fazer a diferença
                        na nossa comunidade, através de ações sociais que visam ao benefício
                        dos mais necessitados.
                        </Typography>
                  
                 </WrapperAbout>
            </Container>
        </Wrapper>
    )
}
