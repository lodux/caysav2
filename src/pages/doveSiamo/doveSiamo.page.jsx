import { Link } from 'react-router-dom'

import './dovesiamo.styles.scss'

const DovesiamoPage = () => (
   <div className="dovesiamocontainer">
   <div className='scrittasup'> 
      <h1 className='spansede'>VIENI A TROVARCI</h1>
      <h2 className="sedi">SPAZI ENEL PARTNER: </h2>
   </div>
   <div className="cittaContainer"> 
      <div className='city'>
         <h4 className='cityname'>Palermo</h4>
         <Link className="link" to='/mappage/ven'>
            <span className='adress' >Via Emanuele Notabartolo 9/D 
            <i className='fa fa-arrow-right' /> 
         </span>
         </Link>
         <Link className="link" to='/mappage/vbr'>
         <span className='adress' >Via Buonriposo 81
            <i className='fa fa-arrow-right' /> 
         </span>
         </Link>
         <Link className="link" to="/mappage/vfp">
            <span className='adress'>Via Filippo Pecoraino (CC FORUM)
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
         <Link className="link" to="/mappage/vsc">
         <span className='adress'>Via Sferra Cavallo 122
            <i className='fa fa-arrow-right' /> 
         </span>
         </Link>     
      </div>
      <div className='city'>
         <h4 className='cityname'>Carini</h4>
         <Link className="link" to="/mappage/ci">
            <span className='adress'>
            Corso Italia 37
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
      <div className='city'>
         <h4 className='cityname'>Balestrate</h4>
         <Link className="link" to="/mappage/vmdp">
            <span className='adress'>
         Via Madonna Del Ponte 38
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
      <div className='city'>
         <h4 className='cityname'>Salemi</h4>
         <Link className="link" to="/mappage/valp">
               <span className='adress'>
            Via Antonino Lo Presti 241
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
      <div className='city'>
         <h4 className='cityname'>Marsala-Strasatti</h4>
         <Link className="link" to="/mappage/vn">
            <span className='adress'>
            Via Nazionale 647
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
      <div className='city'>
         <h4 className='cityname'>Ribera</h4>
         <Link className="link" to="/mappage/cu">
               <span className='adress'>
            Corso Umberto 57
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
      <div className='city'>
         <h4 className='cityname'>Alcamo</h4>
         <Link className="link" to="/mappage/vmdr">
            <span className='adress'>
            Via Madonna Del Riposo 73
            <i className='fa fa-arrow-right' /> 
            </span>
         </Link>
      </div>
   </div>
</div>  
)

export default DovesiamoPage