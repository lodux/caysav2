import { Routes, Route } from "react-router-dom"

import './App.scss';

//import components
import ContattaciPage from '../pages/conttattaci/contattaci.page'
import SupportoPage from '../pages/supporto/supporto.page'
import DoveSiamoPage from '../pages/doveSiamo/doveSiamo.page'
import ImpresePage from '../pages/imprese/imprese.page'
import ChisiamoPage from '../pages/chiSiamo/chiSiamo.page'
import ServiziPage from '../pages/servizi/servizi.page'
import HomePage from '../pages/home/home.page'
import NavBar from '../components/navBar/navBar.component'
import MapPage from '../pages/map/map.page'

const App = () => {
  return (
    <div className='App'> 
      <NavBar />
      <Routes>
        <Route path="/" element = { <HomePage/> }/>
        <Route path="/servizi" element = { <ServiziPage/> }/>
        <Route path="/imprese" element = { <ImpresePage/> }/>
        <Route path="/dovesiamo" element = { <DoveSiamoPage/> }/>
        <Route path="/chisiamo" element = { <ChisiamoPage/> }/>
        <Route path="/supporto" element = { <SupportoPage/> }/>
        <Route path="/contattaci" element = { <ContattaciPage/> }/>
        <Route path="/mappage" element = { <MapPage/> }/>
      </Routes>
    </div>
  )
}

export default App;