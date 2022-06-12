import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


export default function Navbar() {
  return (
    <div className='navbarcontainer'>
        {/* logo */}
        <div className="logo">
            <Link to=''>
                <img className="logoImg" src='https://www.caymangroup.it/wp-content/uploads/2021/03/logo_caygroup_trasp.png' />
            </Link>
        </div>
        {/* opzioni */}
  
        <Link to='' style={{textDecoration: 'none'}}>
            <div className="navoption">HOME</div>
        </Link>
        <Link to='servizi' style={{textDecoration: 'none'}}>
            <div className="navoption">SERVIZI</div>
        </Link>
        <Link to='imprese' style={{textDecoration: 'none'}}>
            <div className="navoption">IMPRESE</div>
        </Link>
        <Link to='dovesiamo' style={{textDecoration: 'none'}}>
            <div className="navoption">DOVE SIAMO</div>
        </Link>
        <Link to='chisiamo'style={{textDecoration: 'none'}}>
            <div className="navoption">CHI SIAMO</div>
        </Link>
        <Link to='supporto' style={{textDecoration: 'none'}}>
            <div className="navoption">SUPPORTO</div>
        </Link>       
  
        {/* cerca */}
        <div className="search">
            <img 
            src='https://th.bing.com/th/id/R.602ef64bc31a62f9ebd523d97fc9f369?rik=JAPpFrIn7Yon0Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_194915.png&ehk=PY%2fOHmWzAr5CQnqxsnvx5nnpZAeNl7OJ5%2fHDzvIuHTo%3d&risl=&pid=ImgRaw&r=0' 
            alt="" 
            width="20px"
            heigth="20px"
            className="search" />
        </div>
    </div>
  )
}
