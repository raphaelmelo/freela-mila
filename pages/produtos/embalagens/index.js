import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import ActionButton from '../../../src/Components/ActionButton'
import HeaderComponent from '../../../src/Components/HeaderComponent'
import Footer from '../../../src/Components/Footer'
import { ProductsPackaging } from '../../../src/produtcs'

import {
  Wrapper, WrapperItem, Item, ItemImage,
  TitleStyled, TitleProductStyled, LinksNavigation
} from '../../../styles/produtos/produtos-descartaveis/style'





const HighlightList = ProductsPackaging.map((item) => (
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
          Embalagens
          </TitleStyled>
        <WrapperItem>
          {HighlightList}
        </WrapperItem>
        <LinksNavigation>
        <Link href="/produtos/produtos-de-limpeza">
        <p>← Produtos de Limpeza</p>
        </Link>
        <Link href="/produtos/produtos-para-festas">
        <p>Produtos de Festas →</p>
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