import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbarcontainer'>
        {/* logo */}
        <div className="logo">
            <img className="logoImg" src='https://www.caymangroup.it/wp-content/uploads/2021/03/logo_caygroup_trasp.png' />
        </div>
        {/* opzioni */}
        <div className="navoption">HOME</div>
        <div className="navoption">SERVIZI</div>
        <div className="navoption">IMPRESE</div>
        <div className="navoption">DOVE SIAMO</div>
        <div className="navoption">CHI SIAMO</div>
        <div className="navoption">SUPPORTO</div>
        {/* cerca */}
        <div className="search">search</div>
    </div>
  )
}
