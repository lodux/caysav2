import { Routes, Route, useLocation } from "react-router-dom"
import { Suspense, lazy } from "react"

import './App.scss';

import ButtonContatta from "../components/buttoncontatta/buttonContatta.component";

//import con lazy per migliorare la performance
const LuceEGasPage = lazy(() => import('../pages/Servizi/luce-e-gas/luce-e-gas.page')) 
const ContattaciPage = lazy(() => import('../pages/contattaci/contattaci.page'))
const DoveSiamoPage = lazy(() => import('../pages/doveSiamo/doveSiamo.page')) 
const NavBar = lazy(() => import('../components/navBar/navBar.component')) 
const SupportoPage = lazy(() => import('../pages/supporto/supporto.page'))
const ChisiamoPage = lazy(() => import('../pages/chisiamo/chiSiamo.page'))
const ServiziPage = lazy(() => import('../pages/Servizi/servizi.page')) 
const ImpresePage = lazy(() => import('../pages/imprese/imprese.page'))
const HomePage = lazy(() => import('../pages/home/home.page'))
const MapPage=lazy(()=> import('../pages/map/map.page'));
const Footer=lazy(()=>import('../components/Footer/footer.component'))

const App = () => {
  const { pathname } = useLocation()

  return (
    <div className='App'> 
      <NavBar linkAttuale = { pathname }/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
           <Route path='servizi' element = { <ServiziPage/> } />
          <Route path='servizi/luce-e-gas' element = { <LuceEGasPage/> }/> 
          <Route path='servizi/fotovoltaico' element = { <h1>Fotovoltaico</h1>}/>
          <Route path="imprese" element = { <ImpresePage/> }/>
          <Route path="dovesiamo" element = { <DoveSiamoPage/> }/>
          <Route path="chisiamo" element = { <ChisiamoPage/> }/>
          <Route path="supporto" element = { <SupportoPage/> }/>
          <Route path="contattaci" element = { <ContattaciPage/> }/>
          <Route path="mappage/:via" element = { <MapPage/> }/>
          <Route path='*' element = { <span>Page not found</span> }/> 
        </Routes>
      </Suspense>
      <ButtonContatta />
      <Footer/>
    </div>
  )
}

export default App;