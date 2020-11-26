import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import ActionButton from '../../src/Components/ActionButton'
import Header from '../../src/Components/Header'
import Home from '../../src/Components/HomePages'
import Categories from '../../src/Components/CategoriesPage'
import Providers from '../../src/Components/Providers'
import Footer from '../../src/Components/Footer'



function Index() {
  return (

      <div className={styles.container}>

        <Head>
          <title></title>
          <link rel="icon" href="#" />
        </Head>

        <ActionButton />

        <header>
          <Header />
          <Home title="Conheça nossos produtos para sua casa ou comercio nas categorias abaixo:" />
        </header>

        <main>
          <Categories />
        </main>
          
        <footer>
          <Providers />
          <Footer />
        </footer>

      </div>


  )
}

export default Index;