import { Routes, Route, useLocation } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navbar from "../components/Navbar/navBar.component";
import DovesiamoPage from "../pages/Dovesiamo/doveSiamo.page";
import ChisiamoPage from "../pages/chisiamo/chiSiamo.page";
import MapPage from "../pages/MapPage/MapPage";
import './App.scss';

import ButtonContatta from "../components/buttoncontatta/buttonContatta.component";

//import con lazy per migliorare la performance
/* const LuceEGasPage = lazy(() => import('../pages/servizi/luce-e-gas/luce-e-gas.page')) */
const ContattaciPage = lazy(() => import('../pages/conttattaci/contattaci.page'))
/* const DoveSiamoPage = lazy(() => import('../pages/doveSiamo/doveSiamo.page')) */
/* const NavBar = lazy(() => import('../components/navBar/navBar.component')) */
const SupportoPage = lazy(() => import('../pages/supporto/supporto.page'))
/* const ChisiamoPage = lazy(() => import('../pages/chiSiamo/chiSiamo.page'))
const ServiziPage = lazy(() => import('../pages/servizi/servizi.page')) */
const ImpresePage = lazy(() => import('../pages/imprese/imprese.page'))
const HomePage = lazy(() => import('../pages/home/home.page'))



const App = () => {
  const { pathname } = useLocation()

  return (
    <div className='App'> 
      <Navbar linkAttuale = { pathname }/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
          {/* <Route path='servizi' element = { <ServiziPage/> } />
          <Route path='servizi/luce-e-gas' element = { <LuceEGasPage/> }/> */}
          <Route path='servizi/fotovoltaico' element = { <h1>Fotovoltaico</h1>}/>
          <Route path="imprese" element = { <ImpresePage/> }/>
          <Route path="dovesiamo" element = { <DovesiamoPage/> }/>
          <Route path="chisiamo" element = { <ChisiamoPage/> }/>
          <Route path="supporto" element = { <SupportoPage/> }/>
          <Route path="contattaci" element = { <ContattaciPage/> }/>
          <Route path="mappage/:via" element = { <MapPage/> }/>
          <Route path='*' element = { <span>Page not found</span> }/> 
        </Routes>
      </Suspense>
      <ButtonContatta />
    </div>
  )
}

export default App;