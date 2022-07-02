import dati from './dati'

import CustomButton from '../../../components/custom-button/custom-button.component'

import './luce-e-gas.styles.scss'

import stella from './3.png'
import salvadanaio from './4.png'
import lampadina from './5.png'
import casa from './6.png'

const LuceEGasPage = () => (
    <div className='pagina-dei-servizi'>
    {
        dati.map(({
            nome,
            titolo,
            descrizione,
            offerte
        }) => (
            <section className='servizio' key={nome}>
                <div className='sticky-div'>
                    <div className='componente-fisso'>
                        <span className='testo'>{titolo}</span>
                        <div className='icone'>
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />                                                            
                        </div>
                        <span className='desc'>{descrizione}</span>
                    </div>
                </div>
                <div className='wrapper'>
                {
                    offerte.map(({
                        titolo,
                        descrizione,
                        testo1,
                        testo2,
                        backgroundImg
                    }) => (
                        <div className='wrapper-laterale'>
                            <div className='componente-laterale' key={titolo}>
                                <div className='annuncio'>
                                    <span className='titolo'>{titolo}</span>
                                    <span className='desc'>{descrizione}</span>
                                    <div className='icona-con-testo'>
                                        <img 
                                            src={salvadanaio}
                                            alt='ico'
                                        />
                                        <span>{testo1}</span>
                                    </div>
                                    <div className='icona-con-testo stella'>
                                        <img 
                                            src={stella}
                                            alt='ico'
                                        />
                                        <span>{testo2}</span>
                                    </div>  
                                    <CustomButton testo='VEDI OFFERTA' path='/supporto' />                 
                                </div>
                                <div 
                                    className='immagine-annuncio' 
                                    style={{
                                        background: `linear-gradient(rgba(#2596be, 0.3), transparent), url(${backgroundImg})`
                                    }} 
                                />
                            </div>
                        </div>
                    ))
                }                                      
                </div>
            </section>
        ))
    }          
    </div>
)

export default LuceEGasPage