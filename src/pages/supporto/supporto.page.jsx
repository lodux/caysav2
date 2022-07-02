import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CheckIcon from './ok.png';

import './supporto.styles.scss';


const SupportoPage = () => {
  const [chiama, setChiama]=useState(false);
  const [pag2, setPag2]=useState(false);
  const [rend, setRen]=useState(false);

const Fattichiamare = () => {
  return (
    <div className="sccontainerfattichiamare">
    <div className="scfrases">
      <i
        onClick={()=>setPag2(true)}
      className="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
      <span className="scfrase">
        Inserisci i tuoi dati e un nostro operatore ti richiamerà prima possibile
        </span>
    </div>
    <form onSubmit={()=>setRen(true)} className="scinputchiama">
      <input
      required
      type="text" 
      min="10" 
      max="11"
      placeholder='Numero di telefono'
      className='scinp' /> 
      <input
      required
      type="text" 
      placeholder='Nome'
      className='scinp' /> 
      <input
      required 
      type="text" 
      placeholder='Cognome'
      className='scinp' 
      style={{marginBottom:"12px"}}/>          
      <span className="scfasciao">fascia oraria: </span>      
    <input 
      required
      type="date" 
      placeholder='Giorno'
      className='scinp' /> 
      <input 
      id='orario'
      required
      type="time" 
      placeholder='ora'
      className='scinp' 
      /> 
      <button type='submit'>FATTI CHIAMARE</button>
    </form>
    <div className="sctastofatti">
    </div>
  
    <div className="scfraseinf">
        <span className="scnormativa">
        Ai sensi del Regolamento UE 679/2016  - “GDPR” autorizzo Cayman Group a contattarmi per ricevere informazioni sulle offerte commerciali e ricevere assistenza. Clicca qui per consultare l'informativa Privacy di Cayman Group
        </span>
    </div>
    <div className="sclinea"></div>
    </div>
    
  )
}

//componente ultima pagina

const Rendirizzamento=()=>{
  return(
    <div className='scserviziocontainer'>
      <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
      <div className="scsupportoContainer">
    <div className="sccentro">
      <img alt='img' src={CheckIcon} style={{color:"#2cbdea",width:"280px"}}/>
      <h3 className="scmess">
    Grazie per aver inoltrato la tua richiesta
    </h3> 
    <span className="scmessca">
      Abbiamo preso in carico la tua richiesta. Un nostro esperto ti chiamerà al più presto
    </span>
    </div>    

    <button className="scchiudibutt" 
    onClick={()=>setRen(false)}>
      CHIUDI
    </button>
    </div>
    </div>
  )
}

//scelta tra fatti chiamare o chiama
const Scelta = () => {
  const [fatti, setFattichiamare]=useState(false);
  useEffect(() => {
    setPag2(false)
  }, [])
  return(
    <div className='spcont'>
     <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
    { fatti===false || pag2 ? (
      <div className='scwrapper'>
        <div className="scContainer">
        <div className="scpartealta">
          <i
          onClick={()=>setChiama(false)}
          className="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
          <h2 className='scscegliscritta'>Scegli come contattarci</h2>
        
      </div>
  
    {/* option chiamata */}
    <a href='https://youtube.com' style={{textDecoration:"none",color:"#000"}}>
    <div className='scoption1'>
          <i className="fa fa-phone" /> {/* immagine telefono */}
      <div className="scpiii">
    
        <span className="scnverde">CHIAMACI</span>
      </div> 

        

  <i className='fa fa-angle-right c'></i>
    </div>
  </a>
    {/* option whatsapp */}
    <div className='scoption2scelta' onClick={()=>setFattichiamare(true)}>
        <i className='fa fa-phone fc' ></i> {/* immagine telefono */}
        <div className="scpiii">
        
        <span className="scfattichiamare">FATTICHIAMARE</span>
      </div> 
    
      <i className='fa fa-angle-right fc'></i>  
    </div>
        </div>
      </div>
    ) : (
    <Fattichiamare/>
    
    )} 
    </div>
  )

}

  const Sedi=()=>{
    return(
      <div className="sediCont">
        <h1 className="sediTit">
          Le Nostre Sedi
        </h1>
        <button className="frasiTit">
          <Link to='/dovesiamo' style={{textDecoration:"none"}}>
              trova la sede cayman più vicina a te
          </Link>
        </button>
      </div>
    )
  }

  const PaginaIn=()=>{
    return (
      <div className='spcont'>
      {/* parte uperiore */}
      <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
      {/* servizio clienti */}
          <>
            <div className='scwrapper'>
              <div className="scContainer">
            </div>            
            <div className="scpartealta">

         <h2 className='scscegliscritta'>Scegli come contattarci</h2>
      
    </div>
          <div className='scoption1' onClick={()=>setChiama(true)}>
          <i className='fa fa-phone'  /> {/* immagine telefono */}
          
            <div className='scpiii'>  
            <div className='scps'>
              <div className="scnverde">
                <span className='scnum'>NUMERO</span>
              </div>
            </div> 
            </div>  
            <i className='fa fa-angle-right n'></i>
          </div>
          <a href=' https://wa.me/3755112341' style={{textDecoration:"none",color:"#000"}}>
          <div className='scoption2'>
       
          <i className='fa fa-whatsapp'></i> {/* immagine telefono */}
              
              <div className='scpiii'>
              <div className="scps">
                
                <div className="">
                <span className='scchat'>CHAT WHATSAPP</span>  

                </div>
              </div> 
              </div>
              <i className='fa fa-angle-right'></i>
              
         </div>
        </a>
         </div>
        
         
        </>
     
        {/* footer */}
        <div className="scfooter">
            <span className='scfoot'>
              Disponibile dal lunedi al venerdi
              dalle 9 alle 18
            </span>
        </div>
      
      </div>
          
    )
  }

  return(
    <>
    { chiama===true ? (
      <>
      {rend===true ? (
        <>
        <Rendirizzamento/>
        <Sedi/>
        </>
      ): (
        <>
        <Scelta/>
      <Sedi/> </>
      )}
      
     </>
    ) : (
      <>
      <PaginaIn/>
      <Sedi/>
      </>
    ) 

    }
    </>
  )
}
   
export default SupportoPage