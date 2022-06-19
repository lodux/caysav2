import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import MapPage from '../MapPage/MapPage';
import {Link} from 'react-router-dom';




import './dovesiamo.styles.scss';



export default function  DovesiamoPage() {

  return (
      <>
         <div className="dovesiamocontainer">
         <div> 
              <span className='spansede'>vieni a trovarci</span>
              <h1 className="sedi">Le nostre sedi:</h1>
         </div>
         <div className="cittaContainer">
           <div className='city'>

              <h4 className='cityname'>Palermo</h4>
              <Link className="link" to='/mappage/ven'>
                <span className='adress' >via emanuele notabartolo 9/D 
               <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
               </span>
              </Link>
              <Link className="link" to='/mappage/vbr'>
               <span className='adress' >via buonriposo 81
               <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
               </span>
               </Link>
               <Link className="link" to="/mappage/vfp">
                   <span className='adress'>via filippo pecoraino (CC FORUM)
                    <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                    </span>
               </Link>
              <Link className="link" to="/mappage/vsc">
               <span className='adress'>via sferra cavallo 122
               <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
               </span>
              </Link>     
           </div>
           <div className='city'>
              <h4 className='cityname'>Carini</h4>
              <Link className="link" to="/mappage/ci">
                 <span className='adress'>
                Corso italia 37
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
           </div>
           <div className='city'>
              <h4 className='cityname'>Balestrate</h4>
              <Link className="link" to="/mappage/vmdp">
                <span className='adress'>
               Via madonna del ponte 38
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
              
           </div>
           <div className='city'>
              <h4 className='cityname'>Salemi</h4>
              <Link className="link" to="/mappage/valp">
                    <span className='adress'>
                Via antonino Lo Presti 241
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
          
           </div>
           <div className='city'>
              <h4 className='cityname'>Marsala-Strasatti</h4>
              <Link className="link" to="/mappage/vn">
                 <span className='adress'>
                Via nazionale 647
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
             
           </div>
           <div className='city'>
              <h4 className='cityname'>Ribera</h4>
              <Link className="link" to="/mappage/cu">
                    <span className='adress'>
                corso umberto 57
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
          
           </div>
           <div className='city'>
              <h4 className='cityname'>Alcamo</h4>
              <Link className="link" to="/mappage/vmdr">
                  <span className='adress'>
                Via madonna del riposo 73
                <img className='arrow' src="https://www.enel.it/spazio-enel/theme/images/freccia_risultati.png" alt="" /> 
                </span>
              </Link>
           </div>
         </div>
        {/*  <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.318325853703!2d13.344777915255836!3d38.13279047969587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef84efcc3bcf%3A0x297348af6c769dc!2sCayman%20Group%20Srl!5e0!3m2!1sit!2sit!4v1654898656323!5m2!1sit!2sit" 
         width="600" 
         height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>  
    
      </>

  )

}

