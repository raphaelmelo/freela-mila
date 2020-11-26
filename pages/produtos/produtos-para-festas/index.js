import Head from 'next/head'
import Link from 'next/link'

import styles from '../../../styles/Home.module.css'

import ActionButton from '../../../src/Components/ActionButton'
import HeaderComponent from '../../../src/Components/HeaderComponent'
import Home from '../../../src/Components/HomePages'


import Footer from '../../../src/Components/Footer'

import { ProductsParty } from '../../../src/produtcs'


import {
  Wrapper, WrapperItem, Item, ItemImage,
  TitleStyled, TitleProductStyled, LinksNavigation
} from '../../../styles/produtos/produtos-para-festas/style'





const HighlightList = ProductsParty.map((item) => (
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


function Index() {

  return (

    <div className={styles.container}>

      <Head>
        <title></title>
        <link rel="icon" href="#" />
      </Head>
      <ActionButton />
      <header>
        <HeaderComponent />
      </header>

      <Wrapper>
        <TitleStyled variant="h2" component="h1">
          Produtos de Festas
          </TitleStyled>
        <WrapperItem>
          {HighlightList}
        </WrapperItem>
        <LinksNavigation>

          <Link href="/produtos/embalagens">
            <p>← Embalagens</p>
          </Link>
          <Link href="/produtos/produtos-descartaveis">
            <p>Produtos Descartaveis →</p>
          </Link>

        </LinksNavigation>
        
        <img src="/delivery.svg" alt="Peça pelo WhatsAPP" />
      </Wrapper>

      <footer>
        <Footer />
      </footer>

    </div>


  )
}
export default Index;