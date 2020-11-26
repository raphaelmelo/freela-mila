import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ActionButton from '../src/Components/ActionButton'
import HeaderComponent from '../src/Components/HeaderComponent'
import HomeComponent from '../src/Components/HomeMain'
import CategoriesComponent from '../src/Components/Categories'
import HighlightComponent from '../src/Components/Highlight'
import TestimonyComponent from '../src/Components/Testimony'
import ProvidersComponent from '../src/Components/Providers'
import Footer from '../src/Components/Footer'


function Home() {
  return (

      <div className={styles.container}>

        <Head>
          <title>Mila - Produtos de limpeza, descartáveis, embalagens e mais </title>
          <meta name="description" content="Aqui na Mila, você encontra produtos de qualidade e preço justo, nosso delivery entrega em toda cidade de Guarujá."/>
          <link rel="icon" href="/icon/favicon.ico"/>
        </Head>

        <ActionButton />

        <header>
          <HeaderComponent />
        </header>

        <main>
          <HomeComponent /> 
          <CategoriesComponent />
          <HighlightComponent />
          <TestimonyComponent />
        </main>
          
        <footer>
          <ProvidersComponent />
          <Footer />
        </footer>

      </div>


  )
}
export default Home;