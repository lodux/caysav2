import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



import jobData from './jobData';
import './lavoro.styles.scss';

export default function Lavoro() {
    const {job}=useParams();
    const [data,setDati]=useState([]);



    useEffect(() => {
        switch(job) {
         case "operatore-corner":
           setDati(jobData[0])
         break;
         case "operatore-call-center":
          setDati(jobData[1])
        break;
        case "affiliazione":
          setDati(jobData[2])
        break;
         default:
           return
        }
    },[job]);

  return (
    <div>
      <div className="bannerImg">
        <img src={data.banner} alt="ban" width="100%" />
      </div>
      <div className="descCont">
          <div className="descrizione">
          <span className="desc">
            {data.desc}
          </span>
          { job=='affiliazione' ? (
            <div className='AffCont'>
              <h3 className='affTit'>Affiliati a Cayman</h3>
              <form action="https://formsubmit.co/peppinoplay2@gmail.com" method="POST">
                <div className='sezCont'>
                   <span className='affDom'>Nome e Cognome*</span>
                    <input type="text" required name="nome e cognome" />
                </div>
                <div className='sezCont'>
                  <span className='affDom'>Nome Azienda*</span>
                  <input type="text" required name="nome azienda" />
                </div>
                <div className='sezCont'>
                  <span className='affDom'>Descrivi brevemente la tua azienda*</span>
                  <textarea type="text" required name="descrizione azienda" />
                </div>
                <div className='sezCont'>
                  <span className='affDom'>Email*</span>
                  <input type="email" required name="Email" />
                </div>
                <div className='sezCont'>
                  <span className='affDom'>Numero di cellulare*</span>
                  <input type="text" required name="Numero di cellullare" />
                </div>
                <button type='submit'>Invia</button>
              </form>
            </div>
          ) : (  
            <>
           <div className='details'>
                  <div className='detCont'>
                    <span className='strong'>Tipologia orario: </span>
                    <span>{data.to}</span>
                  </div>
                  <div className='detCont'>
                    <span className='strong'>Regione: </span>
                    <span>Sicilia</span>
                  </div>
                  <div className='detCont'>
                    <span className='strong'>Luogo: </span>
                    <span>{data.luogo}</span>
                  </div>
            
          </div>          
          <div className="inputLav">
          <h4 className="dom">Carica il tuo curriculum qui sotto </h4>
          <div className='cv'>
                <label htmlFor='cv' className='cv'
                    onClick={() => window.open('mailto:saveriorandazzo51@gmail.com?subject=CV')}>
                    <span className='car'>CARICA IL TUO CV</span> 
            
               
                   
                </label>
            </div>
     
        
         </div>   
            </>  
       
          )
          }
        
      
         

      </div>
      </div>
      </div>

      
  )
}
