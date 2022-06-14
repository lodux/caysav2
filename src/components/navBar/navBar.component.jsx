import { Link } from 'react-router-dom'
import './navBar.styles.scss'

import lente from './search.svg'
const LOGO_LINK = 'https://www.caymangroup.it/wp-content/uploads/2021/03/logo_caygroup_trasp.png'

//evitiamo le ripetizioni di codice il più possibile
const NavBarOption = ({ nome, link }) => (
    <Link to={link} style={{textDecoration: 'none'}}>
        <span className="navoption">{nome}</span>
    </Link> 
)

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo">
                <Link to=''>
                    <img className="logoImg" alt='cayman-logo' src={LOGO_LINK} />
                </Link>
            </div>

            <NavBarOption nome='HOME' link='' />
            <NavBarOption nome='SERVIZI' link='servizi' />
            <NavBarOption nome='IMPRESE' link='imprese' />
            <NavBarOption nome='DOVE SIAMO' link='dovesiamo' />
            <NavBarOption nome='CHI SIAMO' link='chisiamo' />
            <NavBarOption nome='SUPPORTO' link='supporto' />

            <img 
                src={lente} 
                alt="cerca" 
                className="search"
            /> {/* width e height li ho messi nei css*/}
        </div>
    )
}

export default Navbar