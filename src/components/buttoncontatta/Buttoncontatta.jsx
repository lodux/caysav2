import React from 'react'
import './buttoncontatta.css';
import { Link } from 'react-router-dom';
//button da usare nella homepage

export default function Buttoncontatta() {
  return (
      <>
    <Link to='/contattaci'>
    <button className='buttonContatta'>Contattaci</button>
    {/* <div className='logomess'>
        <img 
        src="https://cdn.onlinewebfonts.com/svg/img_503325.png" 
        width="30px"
        heigth="30px"
        alt="" 
        className="imgmess" />
    </div> */}
    </Link>
      </>

  )
}
