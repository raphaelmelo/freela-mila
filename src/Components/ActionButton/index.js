import React from 'react';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components'
import Link from 'next/link'


const WrapperButton = styled.div`
    position:fixed;
    bottom:20px;
    right:7vw;
`
const Button = styled(Fab)`

`
 function ActionButtons() {

    return (
        <WrapperButton >
            <Link href="https://api.whatsapp.com/send?phone=5513996590382&text=Olá, gostaria de fazer um pedido"> 
            <a target="_blank">
                <Button variant="extended">
                    <img src="/whatsapp.svg" width="30px" alt="Entre em contato conosco pelo whatsapp" />
                    (13) 99659-0382
                </Button>
            </a>
            </Link>
        </WrapperButton>
    );
}

export default ActionButtons;
