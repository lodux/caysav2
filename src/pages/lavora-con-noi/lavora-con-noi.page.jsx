import './lavora-con-noi.styles.scss'

import ico from './plus.png'

const LavoraConNoi = () => {

    return (
        <div className='lavora-con-noi'>
            <div className='background-img' >
                <span>LAVORA CON NOI</span>
            </div>  
            <div className='cv-container'>
                <span className='intro'>
                    La Cayman Group offre posizioni lavorative di diverso tipo.
                    Carica il tuo CV corredato di recapito telefonico e indirizzo mail.
                    Sarà nostra cura fissarti un colloquio conoscitivo il prima possibile
                </span>
                <span className='cv'
                    onClick={() => window.open('mailto:saveriorandazzo51@gmail.com?subject=CV')}
                >
                    <img src={ico} alt='add' />
                    INVIA IL TUO CV
                </span>
            </div>
        </div>
    )
}

export default LavoraConNoi