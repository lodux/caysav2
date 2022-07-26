import './lavora-con-noi.styles.scss'

import ico from './plus.png';
import j1 from './2.svg';
import j2 from './3.svg';
import j3 from './4.svg';
import { Link } from 'react-router-dom';

const LavoraConNoi = () => {

    return (
        <div className='lavora-con-noi'>
            <div className='background-img' >
                <span>LAVORA CON NOI</span>
            </div>  
            <div className='cv-container'>
                <Link to='/lavoro/postino'>
                <div className="jobCont">
                    <img src={j1} alt="" className="jobImg" />
                </div> 
                </Link>
                <Link to="/lavoro/pkso">
                <div className="jobCont">
                     <img src={j2} alt="" className="jobImg" />
                </div>                    
                </Link>
                <Link to="/lavoro/mdo">
                <div className="jobCont">
                     <img src={j3} alt="" className="jobImg" />
                </div>   
                </Link>
               
            </div>
        </div>
    )
}

export default LavoraConNoi