import logo from './logo.svg';
import './App.css';
//import router-dom
import { Routes, Route } from "react-router-dom"

//import pages
import Homepage from './pages/Homepage/Homepage';
import ServiziPage from './pages/Servizi/Servizi';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="servizi" element={ <ServiziPage/> } />
      </Routes>
    </div>

  );
}

export default App;
