import './footer.styles.scss'

const Footer = () => {
  return (
    <div className='footcont'>
        <div className="psinistra">
            <h2 className='cay'>Cayman Group s.r.l.s</h2>
            <span className='scritta'>
            Cayman Group è partner di Enel Energia, con sede a Palermo in via Notarbartolo 9/D. 
            I Negozi SEP "Spazio Enel Partner" sono elencati nella sezione "dove siamo" del sito.
            </span>
        </div>
        <div className="pdestra">
            <h3 className="cay">Sede principale</h3>
            <span className="scritta">
            Via Notarbartolo 20,90145 Palermo, Sicilia (ITALIA)
            direzione@caymangroup.it
            +393927498457
            </span>
        </div>
    </div>
  )
}

export default Footer