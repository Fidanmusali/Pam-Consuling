import FooterPage from '../Pages/Footer'
import NavbarPage from '../Pages/Navbar'
import './App.css'
import Scrooling from './Components/Scrooling'
import Routers from './Routers'

function App() {

  return (
    <>
    <Scrooling/>
      <NavbarPage />
      <Routers />
      <FooterPage />


    </>
  )
}

export default App
