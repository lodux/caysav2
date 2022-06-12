import logo from './logo.svg';
import './App.css';
//import router-dom
import { Routes, Route } from "react-router-dom"

//import pages
import Homepage from './pages/Homepage/Homepage';
import ServiziPage from './pages/Servizi/Servizi';
import Supportopage from './pages/supportopage/Supportopage';
import Chisiamopage from './pages/chisiamo/Chisiamopage';
import Dovesiamopage from './pages/Dovesiamo/Dovesiamopage';
import Impresepage from './pages/impresepage/Impresepage';
import Contattacipage from './pages/conttacipage/Contattacipage';
import MapPage from './pages/MapPage/MapPage';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="servizi" element={ <ServiziPage/> } />
        <Route path="/imprese" element={ <Impresepage/> } />
        <Route path="/dovesiamo" element={ <Dovesiamopage/> } />
        <Route path="/chisiamo" element={ <Chisiamopage/> } />
        <Route path="/supporto" element={ <Supportopage/> } />
        <Route path="/contattaci" element={ <Contattacipage/> } />
        <Route path="/mappage" element={ <MapPage/> } />
      </Routes>
    </div>

  );
}

export default App;
