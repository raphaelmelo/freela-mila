import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ActionButton from '../../src/Components/ActionButton'
import Header from '../../src/Components/HeaderComponent'
import Home from '../../src/Components/HomePages'
import Providers from '../../src/Components/Providers'
import Address from '../../src/Components/Address'
 

import Footer from '../../src/Components/Footer'

function Index() {
  return (

      <div className={styles.container}>

        <Head>
          <title>Mila Descartaveis - Contato</title>
          <meta name="description" content="Fale conosco, veja nosso horário de funcionamento e endereço."/>
        </Head>

        <ActionButton />

        <header>
          <Header />
          <Home title="Fale conosco, veja nosso horário de funcionamento e endereço." />
        </header>

        <main>
          <Address />
          </main>
          
        <footer>
          <Providers />
          <Footer />
        </footer>

      </div>


  )
}

export default Index;