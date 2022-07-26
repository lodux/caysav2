import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.scss'

import ContattaciButton from '../components/contattaci-button/contattaci-button.component'
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component'
import ErrorBoundary from '../components/error-boundary/error-boundary.compoent' 
import PageNotFound from '../pages/page-not-found/page-not-found.page'
import NavBar from '../components/navBar/navBar.component'

//per la sezione 'servizi'
import prodotti from './prodotti'

//import con lazy per migliorare la performance
const LavoraConNoiPage = lazy(() => import('../pages/lavora-con-noi/lavora-con-noi.page'))
const LuceEGasPage = lazy(() => import('../pages/servizi/luce-e-gas/luce-e-gas.page'))
const ProdottiPage = lazy(() => import('../pages/servizi/prodotti/prodotti.page'))
const ContattaciPage = lazy(() => import('../pages/contattaci/contattaci.page'))
const ImpresePage = lazy(() => import('../pages/servizi/imprese/imprese.page'))
const PolizzePage = lazy(() => import('../pages/servizi/polizze/polizze.page'))
const DoveSiamoPage = lazy(() => import('../pages/doveSiamo/doveSiamo.page')) 
const SupportoPage = lazy(() => import('../pages/supporto/supporto.page'))
const ChisiamoPage = lazy(() => import('../pages/chiSiamo/chiSiamo.page'))
const ServiziPage = lazy(() => import('../pages/servizi/servizi.page')) 
const HomePage = lazy(() => import('../pages/home/home.page'))
const MappaPage = lazy(() => import('../pages/mappa/mappa.page'))
const Footer = lazy(() => import('../components/footer/footer.component'))
const Informativa=lazy(()=> import('../pages/informativa-privacy/informativa.page'))
const Lavoro=lazy(()=>import('../pages/Lavoro/lavoro.pages'));


const App = () => {
  const { pathname } = useLocation()

  return (
    
    <div className='App'> 
      <ErrorBoundary>
        <NavBar linkAttuale = { pathname }/>
        <Suspense fallback={<LoadingSpinner /> }>
          <Routes>
            <Route path='/' element = { <HomePage/> }/>
            <Route path='servizi' element = { <ServiziPage/> } />
            <Route path='servizi/luce-e-gas' element = { <LuceEGasPage/> }/> 
            <Route path='servizi/polizze' element = { <PolizzePage /> }/>
            <Route path='servizi/fotovoltaico' element = { <ProdottiPage prodotto={prodotti.fotovoltaici} /> }/>
            <Route path='servizi/climatizzatore' element = { <ProdottiPage prodotto={prodotti.climatizzatori} /> }/>
            <Route path='servizi/caldaie' element = { <ProdottiPage prodotto={prodotti.caldaie} /> }/>    
            <Route path='servizi/imprese' element = { <ImpresePage /> }/>
            <Route path='dovesiamo' element = { <DoveSiamoPage /> }/>
            <Route path='lavora-con-noi' element = { <LavoraConNoiPage /> }/>
            <Route path='chisiamo' element = { <ChisiamoPage /> }/>
            <Route path='supporto' element = { <SupportoPage /> }/>
            <Route path='contattaci' element = { <ContattaciPage /> }/>
            <Route path='mappage/:via' element = { <MappaPage /> }/>
            <Route path='informativa-privacy' element = { <Informativa /> }/>
            <Route path='lavoro/:job' element = { <Lavoro/> }/>
            <Route path='*' element = { <PageNotFound /> }/> 
          </Routes>
        </Suspense>
        <ContattaciButton />
        <Footer/>
      </ErrorBoundary>
    </div>
  )
}

export default App