import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {WrapperImage} from '../../styles/sobre/style'
import ActionButton from '../../src/Components/ActionButton'
import Header from '../../src/Components/HeaderComponent'
import Home from '../../src/Components/HomePages'
import Providers from '../../src/Components/Providers'
import About from '../../src/Components/About'
import Footer from '../../src/Components/Footer'



function Index() {
  return (

      <div className={styles.container}>

        <Head>
          <title>Mila Descartaveis - Sobre</title>
          <meta name="description" content="Aqui na Mila você encontrar os melhores produtos para seu negócio."/>
        </Head>

        <ActionButton />

        <header>
          <Header />
          <Home title="Conheça nossa história e propositos como Missão, Visão e Valores." />
          <WrapperImage>
            <img src="/loja.webp" alt="Loja Mila Descataveis no bairro da Enseada em Guarujá" />
          </WrapperImage>
        </header>

        <main>
          <About />
        </main>
          
        <footer>
          <Providers />
          <Footer />
        </footer>

      </div>


  )
}

export default Index;