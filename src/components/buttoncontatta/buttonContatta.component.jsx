import { useNavigate } from 'react-router-dom'

import './buttonContatta.styles.scss'
//button da usare nella homepage

const ButtonContatta = () => {
  const navigate = useNavigate()

  return (
    <button 
      className='button-contattaci'
      onClick={() => navigate('contattaci', { replace: true })}
    >
      Contattaci
      <div className='icona-messaggio'>
        <img 
          src="https://cdn.onlinewebfonts.com/svg/img_503325.png" 
          alt="mess" 
        />
      </div>
    </button>
  )
}

export default ButtonContatta