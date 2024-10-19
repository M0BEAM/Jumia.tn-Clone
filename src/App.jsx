import './App.css'
import Banner from './components/banner'
import Categorie from './components/categorie'
import Footer from './components/footer'
import Hero from './components/hero'
import MeilleureOffre from './components/meilleureOffre'
import NavBar from './components/navBar'
import NosOffres from './components/nosOffres'
import PlusDemande from './components/plusDemende'
import Publicite from './components/publicite'
import Tech from './components/tech'
import VenteFlash from './components/venteFlash'
import { NavProvider } from './context/context'
function App() {

  return (
    <div className=' bg-gray-200'>
      {/* Banner */}
      <Banner />

      {/* navProvider for the sidebar  */}
      <NavProvider >
        {/* NavBar */}
        <NavBar />
        {/* HERO  */}
        <Hero />
      </NavProvider>

      {/* categorie  */}
      <Categorie />
      {/* vente flash  */}
      <VenteFlash />
      {/* MeilleureOffre */}
      <MeilleureOffre />
      {/* PlusDemande */}
      <PlusDemande />
      {/* Publicite */}
      <Publicite />
      {/* nos offres service */}
      <NosOffres />
      {/* tech  */}
      <Tech />
      {/* footer  */}
      <Footer />
    </div>
  )
}

export default App
